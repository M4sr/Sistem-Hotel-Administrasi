import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")

    const where = status ? { status } : {}

    const payments = await prisma.pembayaran.findMany({
      where,
      include: {
        pemesanan: {
          include: {
            user: true,
            kamar: {
              include: {
                hotel: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    })

    return NextResponse.json(payments)
  } catch (error) {
    console.error("Error fetching payments:", error)
    return NextResponse.json(
      { error: "Gagal mengambil data pembayaran" },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { bookingId, paymentMethod } = await req.json()

    // Validasi input
    if (!bookingId || !paymentMethod) {
      return NextResponse.json(
        { error: "Booking ID dan metode pembayaran harus diisi" },
        { status: 400 }
      )
    }

    // Cek booking
    const booking = await prisma.pemesanan.findUnique({
      where: { id: bookingId },
      include: {
        user: true,
        kamar: {
          include: {
            hotel: true
          }
        }
      },
    })

    if (!booking) {
      return NextResponse.json(
        { error: "Booking tidak ditemukan" },
        { status: 404 }
      )
    }

    // Cek apakah booking milik user yang login
    if (booking.userId !== session.user.id) {
      return NextResponse.json(
        { error: "Anda tidak memiliki akses ke booking ini" },
        { status: 403 }
      )
    }

    // Cek status booking
    if (booking.status !== "PENDING") {
      return NextResponse.json(
        { error: "Status booking tidak valid untuk pembayaran" },
        { status: 400 }
      )
    }

    // Cek pembayaran existing
    const existingPayment = await prisma.pembayaran.findUnique({
      where: { pemesananId: bookingId }
    });

    let payment;
    if (existingPayment) {
      // Update pembayaran existing
      payment = await prisma.pembayaran.update({
        where: { pemesananId: bookingId },
        data: {
          metodePembayaran: paymentMethod,
          status: "DIBAYAR",
        },
      });
    } else {
      // Buat pembayaran baru (fallback, seharusnya jarang terjadi)
      payment = await prisma.pembayaran.create({
        data: {
          pemesananId: bookingId,
          metodePembayaran: paymentMethod,
          jumlah: booking.totalHarga,
          status: "DIBAYAR",
        },
      });
    }

    // Update status booking
    await prisma.pemesanan.update({
      where: { id: bookingId },
      data: { status: "DIKONFIRMASI" },
    })

    return NextResponse.json({
      message: "Pembayaran berhasil",
      payment,
    })
  } catch (error) {
    console.error("Payment error:", error)
    return NextResponse.json(
      { error: "Terjadi kesalahan saat memproses pembayaran" },
      { status: 500 }
    )
  }
} 