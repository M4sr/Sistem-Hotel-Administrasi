import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const payment = await prisma.pembayaran.update({
      where: { id: params.id },
      data: { status: "DIBAYAR" },
      include: {
        pemesanan: true
      }
    })

    // Update status pemesanan menjadi DIKONFIRMASI
    await prisma.pemesanan.update({
      where: { id: payment.pemesanan.id },
      data: { status: "DIKONFIRMASI" }
    })

    return NextResponse.json(payment)
  } catch (error) {
    console.error("Error confirming payment:", error)
    return NextResponse.json(
      { error: "Gagal mengkonfirmasi pembayaran" },
      { status: 500 }
    )
  }
} 