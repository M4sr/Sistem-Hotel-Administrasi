import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const tanggalMulai = searchParams.get("tanggalMulai")
    const tanggalSelesai = searchParams.get("tanggalSelesai")
    const status = searchParams.get("status")
    const hotelId = searchParams.get("hotelId")

    // Buat filter berdasarkan parameter yang diberikan
    const where: any = {}

    if (tanggalMulai && tanggalSelesai) {
      where.createdAt = {
        gte: new Date(tanggalMulai),
        lte: new Date(tanggalSelesai)
      }
    }

    if (status) {
      where.status = status
    }

    if (hotelId) {
      where.kamar = {
        hotelId: hotelId
      }
    }

    // Ambil data pemesanan dengan relasi yang diperlukan
    const pemesanan = await prisma.pemesanan.findMany({
      where,
      include: {
        kamar: {
          include: {
            hotel: true
          }
        },
        user: true
      },
      orderBy: {
        createdAt: "desc"
      }
    })

    // Format data untuk response
    const formattedData = pemesanan.map(p => ({
      id: p.id,
      tanggal: p.createdAt.toISOString().split("T")[0],
      hotel: p.kamar.hotel.nama,
      kamar: p.kamar.nama,
      pelanggan: p.user.name || "Tidak ada nama",
      checkIn: p.checkIn.toISOString().split("T")[0],
      checkOut: p.checkOut.toISOString().split("T")[0],
      totalHarga: p.totalHarga,
      status: p.status
    }))

    return NextResponse.json(formattedData)
  } catch (error) {
    console.error("Error fetching laporan:", error)
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil data laporan" },
      { status: 500 }
    )
  }
} 