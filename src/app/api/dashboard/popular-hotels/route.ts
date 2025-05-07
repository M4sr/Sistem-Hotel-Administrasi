import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Hotel, Ulasan, Kamar } from "@prisma/client";

interface KamarWithCount extends Kamar {
  _count: {
    pemesanan: number;
  };
}

interface HotelWithRelations extends Hotel {
  kamar: KamarWithCount[];
  ulasan: Pick<Ulasan, 'rating'>[];
  gambar: {
    url: string;
  }[];
}

export async function GET() {
  try {
    const popularHotels = await prisma.hotel.findMany({
      take: 3,
      include: {
        kamar: {
          include: {
            _count: {
              select: {
                pemesanan: true
              }
            }
          }
        },
        ulasan: {
          select: {
            rating: true
          }
        },
        gambar: {
          select: {
            url: true
          },
          take: 1
        }
      }
    }) as unknown as HotelWithRelations[];

    const formattedHotels = popularHotels.map(hotel => ({
      id: hotel.id,
      name: hotel.nama,
      image: hotel.gambar[0]?.url || "",
      bookings: hotel.kamar.reduce((total: number, kamar: KamarWithCount) => total + kamar._count.pemesanan, 0),
      rating: hotel.ulasan.length > 0
        ? hotel.ulasan.reduce((acc: number, review) => acc + review.rating, 0) / hotel.ulasan.length
        : 0
    }));

    // Sort by number of bookings
    formattedHotels.sort((a, b) => b.bookings - a.bookings);

    return NextResponse.json(formattedHotels);
  } catch (error) {
    console.error("Error fetching popular hotels:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
} 