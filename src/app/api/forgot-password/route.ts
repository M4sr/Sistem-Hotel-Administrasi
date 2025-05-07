import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { randomBytes } from "crypto"
import { sendResetPasswordEmail } from "@/lib/email"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email) {
      return NextResponse.json({ error: "Email wajib diisi" }, { status: 400 })
    }

    console.log("[FORGOT PASSWORD] Mencari user dengan email:", email)

    // Cari user berdasarkan email
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      console.log("[FORGOT PASSWORD] User tidak ditemukan:", email)
      // Untuk keamanan, tetap response sukses walau email tidak ditemukan
      return NextResponse.json({ success: true })
    }

    console.log("[FORGOT PASSWORD] User ditemukan:", user.id)

    // Generate token reset password
    const token = randomBytes(32).toString("hex")
    const expires = new Date(Date.now() + 1000 * 60 * 30) // 30 menit

    console.log("[FORGOT PASSWORD] Menyimpan token reset password")

    // Simpan token ke database
    await prisma.user.update({
      where: { email },
      data: {
        resetPasswordToken: token,
        resetPasswordExpires: expires,
      },
    })

    console.log("[FORGOT PASSWORD] Mengirim email reset password")

    // Kirim email reset password
    await sendResetPasswordEmail(email, token)

    console.log("[FORGOT PASSWORD] Email berhasil dikirim")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[FORGOT PASSWORD] Error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 })
  }
} 