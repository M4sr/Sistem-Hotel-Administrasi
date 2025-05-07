import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Ambil data 6 bulan terakhir
    const months = Array.from({ length: 6 }, (_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      return date;
    }).reverse();

    const bookingStats = await Promise.all(
      months.map(async (month) => {
        const startOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
        const endOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0);

        const bookings = await prisma.pemesanan.count({
          where: {
            createdAt: {
              gte: startOfMonth,
              lte: endOfMonth
            }
          }
        });

        return {
          month: month.toLocaleString('id-ID', { month: 'short' }),
          bookings
        };
      })
    );

    return NextResponse.json({
      labels: bookingStats.map(stat => stat.month),
      data: bookingStats.map(stat => stat.bookings)
    });
  } catch (error) {
    console.error("Error fetching booking stats:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
} 