import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const fasilitasSchema = z.object({
  nama: z.string().min(1, "Nama fasilitas harus diisi"),
  ikon: z.string().optional(),
  hotelId: z.string().min(1, "Hotel harus dipilih"),
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
    const fasilitas = await prisma.fasilitas.findUnique({
      where: { id: params.id },
    })
    if (!fasilitas) {
      return new NextResponse("Fasilitas tidak ditemukan", { status: 404 })
    }
    return NextResponse.json(fasilitas)
  } catch (error) {
    console.error("[FASILITAS_GET_ID]", error)
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
    const data = fasilitasSchema.partial().parse(body)
    const fasilitas = await prisma.fasilitas.update({
      where: { id: params.id },
      data,
    })
    return NextResponse.json(fasilitas)
  } catch (error) {
    console.error("[FASILITAS_PATCH_ID]", error)
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
    await prisma.fasilitas.delete({
      where: { id: params.id },
    })
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error("[FASILITAS_DELETE_ID]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 