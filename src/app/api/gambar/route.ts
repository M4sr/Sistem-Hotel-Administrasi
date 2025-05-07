import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { url, kamarId, hotelId, ulasanId } = body

    if (!url) {
      return NextResponse.json(
        { error: "URL gambar diperlukan" },
        { status: 400 }
      )
    }

    const gambar = await prisma.gambar.create({
      data: {
        url,
        kamarId,
        hotelId,
        ulasanId
      }
    })

    return NextResponse.json(gambar)
  } catch (error) {
    console.error("[GAMBAR_POST]", error)
    return NextResponse.json(
      { error: "Gagal menyimpan gambar" },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const kamarId = searchParams.get('kamarId')
    const hotelId = searchParams.get('hotelId')
    const ulasanId = searchParams.get('ulasanId')

    const where = {
      ...(kamarId && { kamarId }),
      ...(hotelId && { hotelId }),
      ...(ulasanId && { ulasanId })
    }

    const gambar = await prisma.gambar.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(gambar)
  } catch (error) {
    console.error("[GAMBAR_GET]", error)
    return NextResponse.json(
      { error: "Gagal mengambil data gambar" },
      { status: 500 }
    )
  }
} 