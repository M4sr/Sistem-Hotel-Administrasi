import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const kamarSchema = z.object({
  nama: z.string().min(2),
  hotelId: z.string().min(1),
  harga: z.number().min(0),
  kapasitas: z.number().min(1),
  tipe: z.string().min(2),
  status: z.string().min(1),
  gambar: z.array(z.string()).optional(),
})

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    const kamar = await prisma.kamar.findUnique({
      where: { id: params.id },
      include: {
        hotel: true,
        gambar: true,
      },
    })
    if (!kamar) {
      return new NextResponse("Kamar tidak ditemukan", { status: 404 })
    }
    return NextResponse.json(kamar)
  } catch (error) {
    console.error("[KAMAR_GET_ID]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    const body = await req.json()
    const data = kamarSchema.partial().parse(body)
    const kamar = await prisma.kamar.update({
      where: { id: params.id },
      data: {
        ...data,
        gambar: data.gambar ? {
          deleteMany: {},
          create: data.gambar.map((url) => ({ url }))
        } : undefined,
      },
      include: {
        hotel: true,
        gambar: true,
      },
    })
    return NextResponse.json(kamar)
  } catch (error) {
    console.error("[KAMAR_PATCH_ID]", error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Validasi input gagal", errors: error.errors }, { status: 400 })
    }
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    await prisma.kamar.delete({
      where: { id: params.id },
    })
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error("[KAMAR_DELETE_ID]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 