import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const { oldPassword, newPassword } = await request.json()
  if (!oldPassword || !newPassword) {
    return NextResponse.json({ error: "Password lama dan baru wajib diisi" }, { status: 400 })
  }
  const user = await prisma.user.findUnique({ where: { email: session.user.email } })
  if (!user || !user.password) {
    return NextResponse.json({ error: "User tidak ditemukan atau belum punya password" }, { status: 404 })
  }
  const isMatch = await bcrypt.compare(oldPassword, user.password)
  if (!isMatch) {
    return NextResponse.json({ error: "Password lama salah" }, { status: 400 })
  }
  const hashed = await bcrypt.hash(newPassword, 10)
  await prisma.user.update({
    where: { email: session.user.email },
    data: { password: hashed }
  })
  return NextResponse.json({ success: true })
} 