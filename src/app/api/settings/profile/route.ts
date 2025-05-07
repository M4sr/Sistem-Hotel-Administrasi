import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const formData = await request.formData()
  const name = formData.get("name") as string
  const telepon = formData.get("telepon") as string
  const image = formData.get("image") as File | null
  if (!name || !telepon) {
    return NextResponse.json({ error: "Nama dan telepon wajib diisi" }, { status: 400 })
  }
  let imageUrl = null
  if (image) {
    try {
      const bytes = await image.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const uploadDir = join(process.cwd(), "public/uploads")
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true })
      }
      const filename = `${Date.now()}-${image.name}`
      const path = join(uploadDir, filename)
      await writeFile(path, buffer)
      imageUrl = `/uploads/${filename}`
    } catch (error) {
      console.error("Error uploading image:", error)
      return NextResponse.json({ error: "Gagal upload gambar" }, { status: 500 })
    }
  }
  try {
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name,
        telepon,
        ...(imageUrl && { image: imageUrl })
      }
    })
    return NextResponse.json(user)
  } catch (error) {
    console.error("Error updating user:", error)
    return NextResponse.json({ error: "Gagal update profil" }, { status: 500 })
  }
}
