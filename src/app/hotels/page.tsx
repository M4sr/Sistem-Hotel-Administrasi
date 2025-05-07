'use client'

import MainContent from "@/components/layout/MainContent";
import MobileHeader from "@/components/user/MobileHeader";
import { useState } from "react";

export default function HotelsPage() {
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState("termurah");
  return (
    <div className="min-h-screen bg-white font-sans mt-8 md:mt-22">
      {/* Header Mobile */}
      <MobileHeader title="Daftar Hotel" className="md:hidden" />
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Filter bar */}
        <div className="flex flex-wrap gap-4 mb-8">
          <input
            type="text"
            placeholder="Cari lokasi..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          />
          <select
            value={minRating}
            onChange={e => setMinRating(Number(e.target.value))}
            className="px-4 py-2 border rounded-lg"
          >
            <option value={0}>Semua Rating</option>
            <option value={5}>5 ⭐</option>
            <option value={4}>4+ ⭐</option>
            <option value={3}>3+ ⭐</option>
          </select>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="termurah">Harga Terendah</option>
            <option value="termahal">Harga Tertinggi</option>
          </select>
        </div>
        {/* Grid hotel (pakai MainContent dummy hotel) */}
        <MainContent search={search} minRating={minRating} sort={sort} />
      </div>
    </div>
  );
} 