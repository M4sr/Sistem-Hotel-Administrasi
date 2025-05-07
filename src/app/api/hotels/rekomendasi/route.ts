import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function getKotaBySuasana(suasana: string) {
  if (!suasana) return [];
  const map: Record<string, string[]> = {
    "Tropis": ["Bali", "Lombok", "Makassar", "Manado"],
    "Pegunungan": ["Bandung", "Bogor", "Malang", "Batu"],
    "Pusat Kota": ["Jakarta", "Surabaya", "Medan", "Semarang"],
    "Santai di Pantai": ["Bali", "Lombok", "Anyer", "Pangandaran", "Makassar"],
  };
  return map[suasana] || [];
}

function getBudgetRange(budget: string) {
  if (budget.includes("< 500")) return { max: 500000 };
  if (budget.includes("> 1jt")) return { min: 1000000 };
  if (budget.includes("500")) return { min: 500000, max: 1000000 };
  return {};
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tipeLiburan, budget, suasana } = body;

    let where: any = { rating: { gte: 4 } };

    // Mapping suasana ke kota
    const kotaList = getKotaBySuasana(suasana);
    if (kotaList.length > 0) {
      where.kota = { in: kotaList };
    }

    // Query hotel
    let hotels = await prisma.hotel.findMany({
      where,
      include: { gambar: true, kamar: true },
      orderBy: { rating: "desc" },
    });

    // Filter budget kamar
    const budgetRange = getBudgetRange(budget);
    if (Object.keys(budgetRange).length > 0) {
      hotels = hotels.filter(hotel => {
        const harga = hotel.kamar?.[0]?.harga;
        if (!harga) return false;
        if (budgetRange.min && harga < budgetRange.min) return false;
        if (budgetRange.max && harga > budgetRange.max) return false;
        return true;
      });
    }

    // Jika hasil kosong, fallback ke rating saja
    if (hotels.length === 0) {
      hotels = await prisma.hotel.findMany({
        where: { rating: { gte: 4 } },
        include: { gambar: true, kamar: true },
        orderBy: { rating: "desc" },
      });
    }

    // Randomisasi hasil jika lebih dari 1
    let hotelResult = hotels;
    if (hotels.length > 1) {
      const idx = Math.floor(Math.random() * hotels.length);
      hotelResult = [hotels[idx]];
    } else if (hotels.length === 1) {
      hotelResult = [hotels[0]];
    } else {
      hotelResult = [];
    }

    return NextResponse.json(hotelResult);
  } catch (error) {
    console.error("Error rekomendasi hotel:", error);
    return NextResponse.json({ error: "Gagal mengambil rekomendasi hotel" }, { status: 500 });
  }
} 