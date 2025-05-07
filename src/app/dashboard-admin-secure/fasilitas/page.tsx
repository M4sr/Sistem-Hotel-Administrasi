"use client"

import { useState, useEffect } from "react"
export const dynamic = "force-dynamic";
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"

export type Fasilitas = {
  id: string
  nama: string
  ikon?: string | null
  hotel?: { id: string; nama: string }
}

export default function FasilitasPage() {
  const [fasilitas, setFasilitas] = useState<Fasilitas[]>([])
  const router = useRouter()
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const fetchFasilitas = async () => {
      try {
        const response = await fetch("/api/fasilitas")
        if (!response.ok) {
          throw new Error("Gagal mengambil data fasilitas")
        }
        const data = await response.json()
        setFasilitas(data)
      } catch (error) {
        console.error("Error fetching fasilitas:", error)
      }
    }
    fetchFasilitas()
  }, [])

  const handleEdit = (row: Fasilitas) => {
    router.push(`/dashboard-admin-secure/fasilitas/edit/${row.id}`)
  }

  const handleDelete = async (row: Fasilitas) => {
    if (confirm(`Hapus fasilitas: ${row.nama}?`)) {
      try {
        const response = await fetch(`/api/fasilitas/${row.id}`, {
          method: "DELETE",
        })
        if (!response.ok) {
          throw new Error("Gagal menghapus fasilitas")
        }
        setFasilitas(fasilitas.filter(f => f.id !== row.id))
      } catch (error) {
        console.error("Error deleting fasilitas:", error)
      }
    }
  }

  // Group fasilitas by hotel
  const fasilitasByHotel: { [hotelId: string]: { nama: string; fasilitas: Fasilitas[] } } = {};
  fasilitas.forEach(f => {
    const hotelId = f.hotel?.id || 'tanpa_hotel';
    if (!fasilitasByHotel[hotelId]) {
      fasilitasByHotel[hotelId] = { nama: f.hotel?.nama || 'Tanpa Hotel', fasilitas: [] };
    }
    fasilitasByHotel[hotelId].fasilitas.push(f);
  });

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Manajemen Fasilitas</CardTitle>
              <CardDescription>Kelola data fasilitas hotel</CardDescription>
            </div>
            <Button asChild>
              <Link href="/dashboard-admin-secure/fasilitas/add">Tambah Fasilitas</Link>
            </Button>
          </div>
        </CardHeader>
        {mounted ? (
          <CardContent>
            {Object.entries(fasilitasByHotel)
              .sort((a, b) => a[1].nama.localeCompare(b[1].nama))
              .map(([hotelId, group]) => (
                <div key={hotelId} className="mb-8">
                  <div className="font-bold text-lg mb-2 text-primary">{group.nama}</div>
                  <DataTable columns={columns} data={group.fasilitas} onEdit={handleEdit} onDelete={handleDelete} />
                </div>
              ))}
          </CardContent>
        ) : (
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">Memuat data...</div>
          </CardContent>
        )}
      </Card>
    </div>
  )
} 