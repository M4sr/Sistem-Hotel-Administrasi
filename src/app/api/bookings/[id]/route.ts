import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
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