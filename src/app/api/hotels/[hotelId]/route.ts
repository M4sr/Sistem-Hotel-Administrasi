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

type UpdateHotelBody = z.infer<typeof hotelSchema>

export async function PATCH(
  request: Request,
  { params }: { params: { hotelId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    
    // Validasi input
    const validatedData = hotelSchema.parse(body)

    // Update hotel
    const hotel = await prisma.hotel.update({
      where: { id: params.hotelId },
      data: {
        nama: validatedData.nama,
        deskripsi: validatedData.deskripsi || "",
        alamat: validatedData.alamat,
        kota: validatedData.kota,
        negara: validatedData.negara,
        rating: validatedData.rating,
      },
    })

    return NextResponse.json(hotel)
  } catch (error) {
    console.error("Error updating hotel:", error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validasi input gagal", errors: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengupdate hotel" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { hotelId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    console.log("[HOTEL_DELETE] Mencoba menghapus hotel:", params.hotelId)

    // Hapus semua relasi terlebih dahulu
    await prisma.$transaction(async (tx) => {
      // Hapus gambar hotel
      await tx.gambar.deleteMany({
        where: { hotelId: params.hotelId }
      })

      // Hapus fasilitas hotel
      await tx.fasilitas.deleteMany({
        where: { hotelId: params.hotelId }
      })

      // Hapus ulasan hotel
      await tx.ulasan.deleteMany({
        where: { hotelId: params.hotelId }
      })

      // Hapus kamar dan gambar kamar
      const kamar = await tx.kamar.findMany({
        where: { hotelId: params.hotelId },
        select: { id: true }
      })

      for (const k of kamar) {
        await tx.gambar.deleteMany({
          where: { kamarId: k.id }
        })
      }

      await tx.kamar.deleteMany({
        where: { hotelId: params.hotelId }
      })

      // Terakhir, hapus hotel
      await tx.hotel.delete({
        where: { id: params.hotelId }
      })
    })

    console.log("[HOTEL_DELETE] Hotel dan relasinya berhasil dihapus")
    return NextResponse.json({ message: "Hotel berhasil dihapus" })
  } catch (error) {
    console.error("[HOTEL_DELETE] Error:", error)
    return NextResponse.json(
      { error: "Terjadi kesalahan saat menghapus hotel" },
      { status: 500 }
    )
  }
}

export async function GET(
  request: Request,
  { params }: { params: { hotelId: string } }
) {
  try {
    console.log("Fetching hotel with ID:", params.hotelId);
    
    if (!params.hotelId || typeof params.hotelId !== 'string') {
      console.error("Invalid hotel ID:", params.hotelId);
      return NextResponse.json(
        { error: "ID hotel tidak valid" },
        { status: 400 }
      );
    }

    const hotel = await prisma.hotel.findUnique({
      where: { id: params.hotelId },
      include: {
        gambar: true,
        kamar: {
          include: { gambar: true },
          where: { status: 'TERSEDIA' }
        },
        ulasan: {
          include: { 
            user: true,
            balasanUlasan: {
              include: { admin: true }
            }
          },
          orderBy: { createdAt: 'desc' },
          take: 5
        },
        fasilitas: true,
      },
    });

    if (!hotel) {
      console.error("Hotel not found:", params.hotelId);
      return NextResponse.json(
        { error: "Hotel tidak ditemukan" },
        { status: 404 }
      );
    }

    console.log("Hotel found:", hotel.id);
    return NextResponse.json(hotel);
  } catch (error) {
    console.error("Error fetching hotel detail:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil detail hotel" },
      { status: 500 }
    );
  }
} 