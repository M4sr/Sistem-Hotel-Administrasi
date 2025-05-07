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

type FasilitasBody = z.infer<typeof fasilitasSchema>

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    const { searchParams } = new URL(req.url)
    const hotelId = searchParams.get("hotelId")
    const fasilitas = await prisma.fasilitas.findMany({
      where: hotelId ? { hotelId } : undefined,
      orderBy: { createdAt: "desc" },
      include: { hotel: true },
    })
    return NextResponse.json(fasilitas)
  } catch (error) {
    console.error("[FASILITAS_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    const body = await request.json()
    const data = fasilitasSchema.parse(body)
    const fasilitas = await prisma.fasilitas.create({
      data: {
        nama: data.nama,
        ikon: data.ikon,
        hotelId: data.hotelId,
      },
    })
    return NextResponse.json(fasilitas, { status: 201 })
  } catch (error) {
    console.error("[FASILITAS_POST]", error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Validasi input gagal", errors: error.errors }, { status: 400 })
    }
    return new NextResponse("Internal error", { status: 500 })
  }
} 