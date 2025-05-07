import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      notifikasi: true
    }
  })
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }
  // Default jika belum ada preferensi
  const defaultNotif = { email: true, booking: true, review: true }
  return NextResponse.json(user.notifikasi || defaultNotif)
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const body = await request.json()
  // body: { email: boolean, booking: boolean, review: boolean }
  const user = await prisma.user.update({
    where: { email: session.user.email },
    data: {
      notifikasi: body
    },
    select: {
      notifikasi: true
    }
  })
  return NextResponse.json(user.notifikasi)
} 