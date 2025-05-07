"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"
import { Select } from "@/components/ui/select"
import { SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export type Kamar = {
  id: string
  nama: string
  hotel: { id: string; nama: string; fasilitas?: { id: string; nama: string; ikon?: string }[] }
  harga: number
  kapasitas: number
  tipe: string
  status: string
  gambar?: { id: string; url: string }[]
}

export default function KamarPage() {
  const [kamar, setKamar] = useState<Kamar[]>([])
  const [error, setError] = useState("")
  const [selectedHotel, setSelectedHotel] = useState<string>("ALL")
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchKamar = async () => {
      try {
        const res = await fetch("/api/kamar")
        if (!res.ok) throw new Error("Gagal mengambil data kamar")
        const data = await res.json()
        setKamar(data)
      } catch (e) {
        setError("Gagal mengambil data kamar")
      }
    }
    fetchKamar()
  }, [])

  const handleEdit = (row: Kamar) => {
    window.location.href = `/dashboard-admin-secure/kamar/edit/${row.id}`
  }
  const handleDelete = async (row: Kamar) => {
    if (confirm(`Hapus kamar: ${row.nama}?`)) {
      try {
        const res = await fetch(`/api/kamar/${row.id}`, { method: "DELETE" })
        if (!res.ok) throw new Error("Gagal menghapus kamar")
        setKamar(kamar.filter(k => k.id !== row.id))
      } catch (e) {
        setError("Gagal menghapus kamar")
      }
    }
  }

  // Ambil daftar hotel unik
  const hotelList = Array.from(new Set(kamar.map(k => k.hotel.nama))).map(nama => {
    const hotel = kamar.find(k => k.hotel.nama === nama)?.hotel
    return { id: hotel?.id || nama, nama }
  })

  // Filter kamar berdasarkan hotel dan pencarian
  const filteredKamar = kamar.filter(k => {
    const cocokHotel = selectedHotel === "ALL" || k.hotel.id === selectedHotel
    const cocokNama = k.nama.toLowerCase().includes(search.toLowerCase())
    return cocokHotel && cocokNama
  })

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Manajemen Kamar</CardTitle>
              <CardDescription>Kelola data kamar hotel</CardDescription>
            </div>
            <Button asChild>
              <Link href="/dashboard-admin-secure/kamar/add">Tambah Kamar</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-stretch mb-4">
            <div className="w-full md:w-64">
              <Select value={selectedHotel} onValueChange={setSelectedHotel}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter berdasarkan hotel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">Semua Hotel</SelectItem>
                  {hotelList.map(h => (
                    <SelectItem key={h.id} value={h.id}>{h.nama}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Input
              placeholder="Cari berdasarkan nama kamar..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full"
            />
          </div>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <DataTable columns={columns} data={filteredKamar} onEdit={handleEdit} onDelete={handleDelete} />
        </CardContent>
      </Card>
    </div>
  )
} 