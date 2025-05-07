import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

const bookingSchema = z.object({
  userId: z.string(),
  kamarId: z.string(),
  checkIn: z.string(),
  checkOut: z.string(),
  totalHarga: z.number(),
  jumlahTamu: z.number(),
  permintaanKhusus: z.string().optional(),
  status: z.string().default("PENDING"),
})

export async function GET() {
  const bookings = await prisma.pemesanan.findMany({
    include: {
      user: true,
      kamar: { include: { hotel: true } },
      pembayaran: true,
    },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(bookings)
}

export async function POST(req: Request) {
  const body = await req.json()
  const data = bookingSchema.parse(body)
  const booking = await prisma.pemesanan.create({
    data: {
      userId: data.userId,
      kamarId: data.kamarId,
      checkIn: new Date(data.checkIn),
      checkOut: new Date(data.checkOut),
      totalHarga: data.totalHarga,
      jumlahTamu: data.jumlahTamu,
      permintaanKhusus: data.permintaanKhusus,
      status: data.status,
    },
    include: {
      user: true,
      kamar: { include: { hotel: true } },
      pembayaran: true,
    },
  })

  // Otomatisasi pembuatan pembayaran setelah booking berhasil
  const pembayaran = await prisma.pembayaran.create({
    data: {
      pemesananId: booking.id,
      jumlah: booking.totalHarga,
      metodePembayaran: "TRANSFER", // Default, bisa diganti sesuai kebutuhan
      status: "PENDING", // Default status
    }
  })

  // Sertakan data pembayaran pada response
  return NextResponse.json({ ...booking, pembayaran }, { status: 201 })
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")
    if (!id) {
      return NextResponse.json({ error: "ID booking wajib diisi" }, { status: 400 })
    }

    // Hapus pembayaran terkait (jika ada)
    await prisma.pembayaran.deleteMany({ where: { pemesananId: id } })
    // Hapus booking
    await prisma.pemesanan.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting booking:", error)
    return NextResponse.json({ error: "Gagal menghapus booking" }, { status: 500 })
  }
} 