import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (!session.user.email) {
      return NextResponse.json({ error: "Email not found in session" }, { status: 400 });
    }
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        name: true,
        email: true,
        telepon: true,
        createdAt: true,
        image: true,
      },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    // Hitung total booking user
    const totalBooking = await prisma.pemesanan.count({
      where: { userId: user.id }
    });
    // Ambil 5 aktivitas booking terakhir
    const recentActivities = await prisma.pemesanan.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: {
        id: true,
        kamar: { select: { hotel: { select: { nama: true } } } },
        status: true,
        createdAt: true,
      }
    });
    return NextResponse.json({
      ...user,
      totalBooking,
      recentActivities
    });
  } catch (error) {
    console.error("[USER_ME_GET_ERROR]", error);
    return NextResponse.json({ error: "Internal server error", detail: String(error) }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!session.user.email) {
      return NextResponse.json({ error: "Email not found in session" }, { status: 400 });
    }

    const body = await req.json();
    const { name, telepon, image } = body;

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name,
        telepon,
        image,
      },
      select: {
        id: true,
        name: true,
        email: true,
        telepon: true,
        createdAt: true,
        image: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("[USER_PATCH_ERROR]", error);
    return NextResponse.json({ error: "Internal server error", detail: String(error) }, { status: 500 });
  }
} 