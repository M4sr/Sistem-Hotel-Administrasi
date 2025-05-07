import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const review = await prisma.ulasan.findUnique({
      where: { id: params.id },
    });
    if (!review) {
      return NextResponse.json({ error: "Ulasan tidak ditemukan" }, { status: 404 });
    }
    if (review.userId !== session.user.id) {
      return NextResponse.json({ error: "Tidak diizinkan menghapus ulasan ini" }, { status: 403 });
    }
    await prisma.ulasan.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Gagal menghapus ulasan" }, { status: 500 });
  }
} 