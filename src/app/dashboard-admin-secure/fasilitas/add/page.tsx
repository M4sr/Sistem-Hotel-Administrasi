"use client"

import { useState, useEffect } from "react"
export const dynamic = "force-dynamic";
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function AddFasilitasPage() {
  const [nama, setNama] = useState("")
  const [ikon, setIkon] = useState("")
  const [hotelId, setHotelId] = useState("")
  const [hotels, setHotels] = useState<{id: string, nama: string}[]>([])
  const [hotelError, setHotelError] = useState("")
  const router = useRouter()

  const iconOptions = [
    { label: "Wifi", value: "/icons/wifi.svg" },
    { label: "Bed", value: "/icons/bed.svg" },
    { label: "Parking", value: "/icons/parking.svg" },
    { label: "Breakfast", value: "/icons/breakfast.svg" },
    { label: "Clean Room", value: "/icons/cleanroom.svg" },
    { label: "Swimming Pool", value: "/icons/pool.svg" },
    { label: "Gym", value: "/icons/gym.svg" },
    { label: "Spa", value: "/icons/spa.svg" },
    { label: "Restaurant", value: "/icons/restaurant.svg" },
    { label: "Bar", value: "/icons/bar.svg" },
    { label: "Conference Room", value: "/icons/conference.svg" },
    { label: "Laundry", value: "/icons/laundry.svg" },
    { label: "Room Service", value: "/icons/roomservice.svg" },
    { label: "Elevator", value: "/icons/elevator.svg" },
    { label: "Security", value: "/icons/security.svg" },
    { label: "Air Conditioning", value: "/icons/ac.svg" },
    { label: "TV", value: "/icons/tv.svg" },
    { label: "Safe", value: "/icons/safe.svg" },
    { label: "Bathroom", value: "/icons/bathroom.svg" },
    { label: "Shower", value: "/icons/shower.svg" },
  ];

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("/api/hotels")
        if (!res.ok) throw new Error("Gagal mengambil data hotel")
        const data = await res.json()
        setHotels(data)
        if (data.length > 0) setHotelId(data[0].id)
      } catch (e) {
        console.error(e)
      }
    }
    fetchHotels()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!hotelId) {
      setHotelError("Hotel harus dipilih")
      return
    }
    setHotelError("")
    try {
      const response = await fetch("/api/fasilitas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama, ikon, hotelId }),
      })
      if (!response.ok) {
        throw new Error("Gagal menambah fasilitas")
      }
      router.push("/dashboard-admin-secure/fasilitas")
    } catch (error) {
      console.error("Error adding fasilitas:", error)
    }
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Tambah Fasilitas</CardTitle>
          <CardDescription>Tambah data fasilitas hotel</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="hotelId" className="mb-1 block">Hotel</Label>
              <select
                id="hotelId"
                value={hotelId}
                onChange={e => setHotelId(e.target.value)}
                required
                className={cn(
                  "w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
                  hotelError && "border-red-500"
                )}
              >
                {hotels.length === 0 && <option value="">Tidak ada hotel tersedia</option>}
                {hotels.map(hotel => (
                  <option key={hotel.id} value={hotel.id}>{hotel.nama}</option>
                ))}
              </select>
              {hotelError && <p className="text-red-500 text-xs mt-1">{hotelError}</p>}
            </div>
            <div>
              <Label htmlFor="nama" className="mb-1 block">Nama Fasilitas</Label>
              <Input
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                placeholder="Contoh: WiFi, AC, TV"
              />
            </div>
            <div>
              <Label htmlFor="ikon" className="mb-1 block">Ikon (Opsional)</Label>
              <Input
                id="ikon"
                value={ikon}
                onChange={(e) => setIkon(e.target.value)}
                placeholder="Contoh: /icons/wifi.svg atau emoji 📶"
              />
              <div className="flex gap-4 mt-2 flex-wrap">
                {iconOptions.map((icon) => (
                  <button
                    type="button"
                    key={icon.value}
                    onClick={() => setIkon(icon.value)}
                    className={`border rounded-lg p-2 flex flex-col items-center w-16 h-16 justify-center transition focus:outline-none ${ikon === icon.value ? 'border-pink-500 bg-pink-50' : 'border-gray-200 bg-white'}`}
                  >
                    <img src={icon.value} alt={icon.label} className="w-7 h-7 mb-1" />
                    <span className="text-xs text-gray-700">{icon.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex space-x-2">
              <Button type="submit">Simpan</Button>
              <Button type="button" variant="outline" onClick={() => router.push("/dashboard-admin-secure/fasilitas")}>
                Kembali
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 