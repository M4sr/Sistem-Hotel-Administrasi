import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  try {
    const { token, password } = await req.json()
    
    if (!token || !password) {
      return NextResponse.json({ error: "Token dan password wajib diisi" }, { status: 400 })
    }

    // Cari user dengan token yang valid
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: {
          gt: new Date() // token belum expired
        }
      }
    })

    if (!user) {
      return NextResponse.json({ error: "Token tidak valid atau sudah expired" }, { status: 400 })
    }

    // Hash password baru
    const hashedPassword = await bcrypt.hash(password, 10)

    // Update password dan hapus token reset
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[RESET PASSWORD] Error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 })
  }
} 