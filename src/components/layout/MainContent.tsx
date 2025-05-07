"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, Castle, Sun, Umbrella, TreePalm, Mountain, Landmark, Sparkles, Home as HomeIcon } from "lucide-react";

const categories = [
  { name: "Castles", icon: <Castle className="w-6 h-6" /> },
  { name: "Icons", icon: <Landmark className="w-6 h-6" /> },
  { name: "Beachfront", icon: <Umbrella className="w-6 h-6" /> },
  { name: "Islands", icon: <Sun className="w-6 h-6" /> },
  { name: "Countryside", icon: <TreePalm className="w-6 h-6" /> },
  { name: "Tropical", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Mansions", icon: <HomeIcon className="w-6 h-6" /> },
  { name: "Amazing views", icon: <Mountain className="w-6 h-6" /> },
];

interface MainContentProps {
  search: string;
  minRating: number;
  sort: string;
}

// Tambahkan fungsi helper untuk menampilkan bintang
const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className="text-pink-600 font-bold text-base ml-1">
        {rating}
      </span>
    </div>
  );
};

export default function MainContent({ search, minRating, sort }: MainContentProps) {
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/hotels")
      .then((res) => res.json())
      .then((data) => {
        setHotels(data);
        setLoading(false);
      });
  }, []);

  // Filter dan sorting
  const filteredHotels = hotels
    .filter(hotel =>
      hotel.kota.toLowerCase().includes(search.toLowerCase()) ||
      hotel.nama.toLowerCase().includes(search.toLowerCase())
    )
    .filter(hotel => !minRating || (hotel.rating ?? 0) >= minRating)
    .sort((a, b) => {
      const hargaA = a.kamar?.[0]?.harga ?? 0;
      const hargaB = b.kamar?.[0]?.harga ?? 0;
      if (sort === "termurah") return hargaA - hargaB;
      if (sort === "termahal") return hargaB - hargaA;
      return 0;
    });

  return (
    <>
      {/* Kategori */}
      <section className="w-full overflow-x-auto border-b bg-white">
        <div className="flex gap-8 px-8 py-4 min-w-max">
          {categories.map((cat, i) => (
            <div key={cat.name} className="flex flex-col items-center cursor-pointer group">
              <div className={`rounded-full p-3 mb-1 ${i === 0 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'} group-hover:bg-pink-600 group-hover:text-white transition`}>
                {cat.icon}
              </div>
              <span className={`text-xs font-medium ${i === 0 ? 'text-gray-900' : 'text-gray-500'} group-hover:text-pink-600 transition`}>{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Grid Card Hotel */}
      <section className="mt-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1,2,3,4,5,6,7,8].map((_,i) => (
              <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 relative animate-pulse">
                <div className="relative h-56 w-full bg-gray-200" />
                <div className="p-4 space-y-2">
                  <div className="h-5 w-2/3 bg-gray-200 rounded" />
                  <div className="h-4 w-1/2 bg-gray-200 rounded" />
                  <div className="h-4 w-3/4 bg-gray-200 rounded" />
                  <div className="h-5 w-1/3 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredHotels.length === 0 ? (
          <div className="text-center text-gray-400 py-12">Tidak ada hotel ditemukan.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredHotels.map((hotel, i) => (
              <Link
                key={hotel.id}
                href={`/hotels/${hotel.id}`}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition group cursor-pointer border border-gray-100 relative"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={`/images/hotel${(i % 4) + 1}.jpg`}
                    alt={hotel.nama}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-base text-gray-900 mb-1">{hotel.nama}</div>
                  <div className="text-xs text-gray-500 mb-1">{hotel.kota}, {hotel.negara}</div>
                  <div className="text-xs text-gray-500 mb-2">{hotel.alamat}</div>
                  <RatingStars rating={hotel.rating ?? 0} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
} 