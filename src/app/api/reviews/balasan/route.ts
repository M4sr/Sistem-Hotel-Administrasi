import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const balasan = await prisma.balasanUlasan.findMany({
      include: {
        ulasan: {
          include: {
            hotel: true,
            user: true
          }
        },
        admin: true
      },
      orderBy: { createdAt: "desc" }
    })
    return NextResponse.json(balasan)
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengambil data balasan ulasan" }, { status: 500 })
  }
} 