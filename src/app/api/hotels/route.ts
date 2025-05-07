import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const hotelSchema = z.object({
  nama: z.string().min(2),
  deskripsi: z.string().optional(),
  alamat: z.string().min(5),
  kota: z.string().min(2),
  negara: z.string().min(2),
  rating: z.number().min(0).max(5).optional(),
})

type CreateHotelBody = z.infer<typeof hotelSchema>

export async function GET() {
  try {
    const hotels = await prisma.hotel.findMany({
      include: {
        gambar: true,
        kamar: true,
      },
    })
    return NextResponse.json(hotels)
  } catch (error) {
    console.error("Error fetching hotels:", error)
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil data hotel" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    
    // Validasi input
    const validatedData = hotelSchema.parse(body)

    // Buat hotel baru
    const hotel = await prisma.hotel.create({
      data: {
        nama: validatedData.nama,
        deskripsi: validatedData.deskripsi || "",
        alamat: validatedData.alamat,
        kota: validatedData.kota,
        negara: validatedData.negara,
        rating: validatedData.rating,
      },
    })

    return NextResponse.json(hotel, { status: 201 })
  } catch (error) {
    console.error("Error creating hotel:", error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validasi input gagal", errors: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { message: "Terjadi kesalahan saat membuat hotel" },
      { status: 500 }
    )
  }
} 