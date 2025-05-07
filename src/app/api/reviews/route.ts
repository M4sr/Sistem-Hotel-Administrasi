import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"


export async function GET() {
  try {
    const reviews = await prisma.ulasan.findMany({
      include: {
        user: true,
        hotel: true,
        balasanUlasan: {
          include: {
            admin: true
          },
          orderBy: { createdAt: "asc" }
        },
        gambar: true
      },
      orderBy: { createdAt: "desc" }
    })
    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengambil data ulasan" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const userId = session.user.id;
    const body = await req.json();
    const { hotelId, rating, komentar, anonim } = body;
    if (!hotelId || !rating) {
      return NextResponse.json({ error: 'Data ulasan tidak lengkap' }, { status: 400 });
    }
    const ulasan = await prisma.ulasan.create({
      data: {
        userId,
        hotelId,
        rating,
        komentar: komentar || '',
        anonim: !!anonim,
      },
    });
    return NextResponse.json({ success: true, ulasan });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal menyimpan ulasan' }, { status: 500 });
  }
} 