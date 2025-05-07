import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const recentBookings = await prisma.pemesanan.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        kamar: {
          select: {
            hotel: {
              select: {
                nama: true,
                gambar: {
                  select: {
                    url: true
                  },
                  take: 1
                }
              }
            }
          }
        }
      }
    });

    const formattedBookings = recentBookings.map(booking => ({
      id: booking.id,
      hotelName: booking.kamar.hotel.nama,
      hotelImage: booking.kamar.hotel.gambar[0]?.url || "",
      duration: Math.ceil(
        (new Date(booking.checkOut).getTime() - new Date(booking.checkIn).getTime()) 
        / (1000 * 60 * 60 * 24)
      ),
      createdAt: booking.createdAt.toISOString()
    }));

    return NextResponse.json(formattedBookings);
  } catch (error) {
    console.error("Error fetching recent bookings:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
} 