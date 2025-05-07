import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { Prisma } from "@prisma/client"
import * as z from "zod"
import bcrypt from "bcryptjs"
import { writeFile } from 'fs/promises'
import { join } from 'path'

// Schema validasi untuk request body
const createUserSchema = z.object({
  name: z.string().min(2, "Nama harus minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password harus minimal 6 karakter"),
  telepon: z.string().optional(),
  roleId: z.string({
    required_error: "Role harus dipilih"
  })
})

// GET /api/users
export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        telepon: true,
        createdAt: true,
        image: true,
        role: {
          select: {
            name: true,
            permissions: {
              select: {
                name: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(users)
  } catch (error) {
    console.error("[USERS_GET]", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// POST /api/users
export async function POST(req: Request) {
  try {
    // 1. Cek autentikasi
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    // 2. Parse FormData
    const formData = await req.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const roleId = formData.get('roleId') as string
    const telepon = formData.get('telepon') as string | null
    const image = formData.get('image') as File | null

    // 3. Validasi data
    if (!name || !email || !password || !roleId) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 }
      )
    }

    // 4. Cek apakah email sudah digunakan
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "Email sudah digunakan" },
        { status: 400 }
      )
    }

    // 5. Proses upload gambar jika ada
    let imagePath = null
    if (image) {
      const bytes = await image.arrayBuffer()
      const buffer = Buffer.from(bytes)
      
      // Buat nama file yang unik
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
      const filename = `${uniqueSuffix}-${image.name}`
      const uploadDir = join(process.cwd(), 'public/uploads')
      const filepath = join(uploadDir, filename)
      
      await writeFile(filepath, buffer)
      imagePath = `/uploads/${filename}`
    }

    // 6. Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // 7. Buat user baru
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        roleId,
        telepon: telepon || null,
        image: imagePath,
      },
      include: {
        role: {
          include: {
            permissions: true
          }
        }
      }
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error("[USER_CREATE]", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 