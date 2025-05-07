import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const kamarSchema = z.object({
  nama: z.string().min(2),
  nomorKamar: z.string().min(1, "Nomor kamar harus diisi"),
  hotelId: z.string().min(1),
  harga: z.number().min(0),
  kapasitas: z.number().min(1),
  tipe: z.string().min(2),
  status: z.string().min(1),
  gambar: z.array(z.string()).optional(),
})

type KamarBody = z.infer<typeof kamarSchema>

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    const { searchParams } = new URL(req.url)
    const checkIn = searchParams.get("checkIn")
    const checkOut = searchParams.get("checkOut")
    let kamar
    if (checkIn && checkOut) {
      kamar = await prisma.kamar.findMany({
        where: {
          pemesanan: {
            none: {
              OR: [
                {
                  checkIn: { lt: new Date(checkOut) },
                  checkOut: { gt: new Date(checkIn) },
                },
              ],
            },
          },
        },
        include: {
          hotel: { include: { fasilitas: true } },
          gambar: true,
        },
        orderBy: { createdAt: "desc" },
      })
    } else {
      kamar = await prisma.kamar.findMany({
        include: {
          hotel: { include: { fasilitas: true } },
          gambar: true,
        },
        orderBy: { createdAt: "desc" },
      })
    }
    return NextResponse.json(kamar)
  } catch (error) {
    console.error("[KAMAR_GET]", error)
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
    console.log("BODY DITERIMA API:", body)
    const data = kamarSchema.parse(body)

    const kamar = await prisma.kamar.create({
      data: {
        nama: data.nama,
        nomorKamar: data.nomorKamar,
        hotelId: data.hotelId,
        harga: data.harga,
        kapasitas: data.kapasitas,
        tipe: data.tipe,
        status: data.status,
        gambar: data.gambar && data.gambar.length > 0 ? {
          create: data.gambar.map((url) => ({ url }))
        } : undefined,
      },
      include: {
        hotel: {
          include: {
            fasilitas: true,
          },
        },
        gambar: true,
      },
    })
    return NextResponse.json(kamar, { status: 201 })
  } catch (error) {
    console.error("[KAMAR_POST]", error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Validasi input gagal", errors: error.errors }, { status: 400 })
    }
    return new NextResponse("Internal error", { status: 500 })
  }
} 