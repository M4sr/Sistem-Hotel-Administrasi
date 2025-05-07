import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const payment = await prisma.pembayaran.update({
      where: { id: params.id },
      data: { status: "GAGAL" },
      include: {
        pemesanan: true
      }
    })

    // Update status pemesanan menjadi DIBATALKAN
    await prisma.pemesanan.update({
      where: { id: payment.pemesanan.id },
      data: { status: "DIBATALKAN" }
    })

    return NextResponse.json(payment)
  } catch (error) {
    console.error("Error rejecting payment:", error)
    return NextResponse.json(
      { error: "Gagal menolak pembayaran" },
      { status: 500 }
    )
  }
} 