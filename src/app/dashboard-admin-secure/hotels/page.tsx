"use client"

import { useEffect, useState } from "react"
export const dynamic = "force-dynamic";
import { useSession } from "next-auth/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"
import { HotelDialog } from "./components/hotel-dialog"

export type Fasilitas = {
  id: string
  nama: string
  ikon?: string | null
}

export type Gambar = {
  id: string
  url: string
}

export type Hotel = {
  id: string
  nama: string
  deskripsi?: string | null
  alamat: string
  kota: string
  negara: string
  rating?: number | null
  createdAt: string
  updatedAt: string
  fasilitas: Fasilitas[]
  gambar: Gambar[]
}

export default function HotelsPage() {
  const { data: session } = useSession()
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null)

  const fetchHotels = async () => {
    try {
      const response = await fetch("/api/hotels")
      if (!response.ok) throw new Error("Failed to fetch hotels")
      const data = await response.json()
      setHotels(data)
    } catch (error) {
      console.error("Error fetching hotels:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHotels()
  }, [])

  const handleAddClick = () => {
    setSelectedHotel(null)
    setDialogOpen(true)
  }

  const handleEditClick = (hotel: Hotel) => {
    setSelectedHotel(hotel)
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
    setSelectedHotel(null)
  }

  const handleHotelSubmit = async () => {
    // Refresh data setelah submit
    const response = await fetch("/api/hotels")
    if (response.ok) {
      const data = await response.json()
      setHotels(data)
    }
    handleDialogClose()
  }

  const handleDelete = () => {
    fetchHotels() // Refresh data setelah menghapus
  }

  if (!session) {
    return null
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Manajemen Hotel</CardTitle>
              <CardDescription>
                Kelola informasi hotel dalam sistem
              </CardDescription>
            </div>
            <Button onClick={handleAddClick}>
              <Plus className="mr-2 h-4 w-4" />
              Tambah Hotel
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-4">Memuat data...</div>
          ) : (
            <DataTable 
              columns={columns} 
              data={hotels}
              onEdit={handleEditClick}
              onDelete={handleDelete}
            />
          )}
        </CardContent>
      </Card>

      <HotelDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        hotel={selectedHotel}
        onSubmit={handleHotelSubmit}
      />
    </div>
  )
} 