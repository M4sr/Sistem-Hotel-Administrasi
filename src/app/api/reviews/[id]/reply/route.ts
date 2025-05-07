import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const admin = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { role: true }
    })

    if (!admin || admin.role?.name !== "Admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { isi } = await request.json()
    if (!isi) {
      return NextResponse.json({ error: "Isi balasan diperlukan" }, { status: 400 })
    }

    const balasan = await prisma.balasanUlasan.create({
      data: {
        isi,
        ulasanId: params.id,
        adminId: admin.id
      },
      include: {
        admin: true
      }
    })

    return NextResponse.json(balasan)
  } catch (error) {
    console.error("Error creating reply:", error)
    return NextResponse.json(
      { error: "Gagal membuat balasan" },
      { status: 500 }
    )
  }
} 