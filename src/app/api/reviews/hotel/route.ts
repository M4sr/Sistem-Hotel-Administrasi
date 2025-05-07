import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hotelId = searchParams.get("hotelId")
  if (!hotelId) {
    return NextResponse.json({ error: "hotelId diperlukan" }, { status: 400 })
  }
  try {
    const reviews = await prisma.ulasan.findMany({
      where: { hotelId },
      include: {
        user: true,
        hotel: true,
        balasanUlasan: {
          include: { admin: true },
          orderBy: { createdAt: "asc" }
        },
        gambar: true
      },
      orderBy: { createdAt: "desc" }
    })
    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengambil data ulasan hotel" }, { status: 500 })
  }
} 