import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import bcrypt from "bcryptjs"
import * as z from "zod"
import { writeFile } from 'fs/promises'
import { join } from 'path'

const updateUserSchema = z.object({
  name: z.string().min(2, "Nama harus minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password harus minimal 6 karakter").optional(),
  roleId: z.string({
    required_error: "Role harus dipilih"
  }),
  telepon: z.string().optional(),
})

// DELETE /api/users/[id]
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const user = await prisma.user.delete({
      where: {
        id: params.id
      }
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error("[USER_DELETE]", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        name: true,
        email: true,
        telepon: true,
        roleId: true,
        role: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    if (!user) {
      return new NextResponse("User not found", { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error("[USER_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
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
    const password = formData.get('password') as string | null
    const roleId = formData.get('roleId') as string
    const telepon = formData.get('telepon') as string | null
    const image = formData.get('image') as File | null

    // 3. Validasi data
    if (!name || !email || !roleId) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 }
      )
    }

    // 4. Cek apakah email sudah digunakan (kecuali oleh user yang sedang diedit)
    const existingUser = await prisma.user.findFirst({
      where: {
        email,
        NOT: {
          id: params.id
        }
      }
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

    // 6. Update user
    const updateData: any = {
      name,
      email,
      roleId,
      telepon: telepon || null,
    }

    if (password) {
      updateData.password = await bcrypt.hash(password, 10)
    }

    if (imagePath) {
      updateData.image = imagePath
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: params.id
      },
      data: updateData,
      include: {
        role: {
          include: {
            permissions: true
          }
        }
      }
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error("[USER_UPDATE]", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 