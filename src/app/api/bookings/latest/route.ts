import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const hotelId = searchParams.get("hotelId");
    const kamarId = searchParams.get("kamarId");

    if (!hotelId || !kamarId) {
      return NextResponse.json(
        { error: "Hotel ID dan Kamar ID harus diisi" },
        { status: 400 }
      );
    }

    // Ambil booking terbaru
    const booking = await prisma.pemesanan.findFirst({
      where: {
        userId: session.user.id,
        kamarId: kamarId,
        status: "PENDING",
      },
      include: {
        user: true,
        kamar: {
          include: {
            hotel: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!booking) {
      return NextResponse.json(
        { error: "Booking tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error("Error fetching latest booking:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil data booking" },
      { status: 500 }
    );
  }
} 