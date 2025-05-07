import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Hitung total hotel
    const totalHotels = await prisma.hotel.count();

    // Hitung pemesanan aktif
    const activeBookings = await prisma.pemesanan.count({
      where: {
        status: "ACTIVE"
      }
    });

    // Hitung total pengguna
    const totalUsers = await prisma.user.count();

    // Hitung pendapatan bulan ini
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const monthlyRevenue = await prisma.pemesanan.aggregate({
      where: {
        status: "COMPLETED",
        createdAt: {
          gte: startOfMonth
        }
      },
      _sum: {
        totalHarga: true
      }
    });

    // Hitung pertumbuhan dari bulan lalu
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    lastMonth.setDate(1);
    lastMonth.setHours(0, 0, 0, 0);

    const lastMonthRevenue = await prisma.pemesanan.aggregate({
      where: {
        status: "COMPLETED",
        createdAt: {
          gte: lastMonth,
          lt: startOfMonth
        }
      },
      _sum: {
        totalHarga: true
      }
    });

    const revenueGrowth = lastMonthRevenue._sum.totalHarga 
      ? ((monthlyRevenue._sum.totalHarga || 0) - lastMonthRevenue._sum.totalHarga) / lastMonthRevenue._sum.totalHarga * 100
      : 0;

    return NextResponse.json({
      totalHotels,
      activeBookings,
      totalUsers,
      monthlyRevenue: monthlyRevenue._sum.totalHarga || 0,
      stats: {
        hotelsGrowth: 2, // Contoh statis, bisa dihitung dari data historis
        bookingsGrowth: 12, // Contoh statis, bisa dihitung dari data historis
        usersGrowth: 23, // Contoh statis, bisa dihitung dari data historis
        revenueGrowth: Math.round(revenueGrowth * 100) / 100
      }
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
} 