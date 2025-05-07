"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Kamar } from "../page"
import { Select } from "@/components/ui/select"
import { SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function StatusKamarPage() {
  const [kamar, setKamar] = useState<Kamar[]>([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [sliderIndex, setSliderIndex] = useState<{[id: string]: number}>({})
  const [updating, setUpdating] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchKamar = async () => {
      try {
        const res = await fetch("/api/kamar")
        if (!res.ok) throw new Error("Gagal mengambil data kamar")
        const data = await res.json()
        setKamar(data)
      } catch (e) {
        setError("Gagal mengambil data kamar")
      } finally {
        setLoading(false)
      }
    }
    fetchKamar()
  }, [])

  useEffect(() => { setMounted(true); }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "TERSEDIA":
        return "bg-green-500"
      case "TERISI":
        return "bg-blue-500"
      case "MAINTENANCE":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "TERSEDIA":
        return "Tersedia"
      case "TERISI":
        return "Terisi"
      case "MAINTENANCE":
        return "Maintenance"
      default:
        return status
    }
  }

  const handleSlider = (id: string, dir: "prev" | "next", max: number) => {
    setSliderIndex((prev) => {
      const curr = prev[id] || 0
      if (dir === "next") {
        return { ...prev, [id]: (curr + 1) % max }
      } else {
        return { ...prev, [id]: (curr - 1 + max) % max }
      }
    })
  }

  const handleStatusChange = async (id: string, status: string) => {
    setUpdating(id)
    try {
      const res = await fetch(`/api/kamar/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      })
      if (!res.ok) throw new Error("Gagal mengubah status kamar")
      setKamar((prev) => prev.map((k) => k.id === id ? { ...k, status } : k))
    } catch (e) {
      alert("Gagal mengubah status kamar")
    } finally {
      setUpdating(null)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-6">
        <div className="text-center">Memuat data...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-6">
        <div className="text-red-500 text-center">{error}</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Status Kamar</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="TERSEDIA" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="TERSEDIA" className="relative">
                Tersedia
                <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-green-600 text-white absolute -top-2 right-2">
                  {kamar.filter((k) => k.status === "TERSEDIA").length}
                </span>
              </TabsTrigger>
              <TabsTrigger value="TERISI" className="relative">
                Terisi
                <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-blue-600 text-white absolute -top-2 right-2">
                  {kamar.filter((k) => k.status === "TERISI").length}
                </span>
              </TabsTrigger>
              <TabsTrigger value="MAINTENANCE" className="relative">
                Maintenance
                <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-red-600 text-white absolute -top-2 right-2">
                  {kamar.filter((k) => k.status === "MAINTENANCE").length}
                </span>
              </TabsTrigger>
            </TabsList>
            {["TERSEDIA", "TERISI", "MAINTENANCE"].map((status) => (
              <TabsContent key={status} value={status}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {kamar
                    .filter((k) => k.status === status)
                    .map((k) => (
                      <Card key={k.id} className="overflow-hidden">
                        <div className="relative aspect-video">
                          {mounted ? (
                            (k.gambar ?? []).length > 0 ? (
                              <>
                                <Image
                                  src={(k.gambar ?? [])[sliderIndex[k.id] || 0]?.url || (k.gambar ?? [])[0]?.url || "/placeholder.png"}
                                  alt={k.nama}
                                  fill
                                  className="object-cover transition-all duration-300"
                                />
                                {(k.gambar ?? []).length > 1 && (
                                  <>
                                    <button
                                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1"
                                      onClick={() => handleSlider(k.id, "prev", (k.gambar ?? []).length)}
                                      type="button"
                                    >
                                      <ChevronLeft className="h-6 w-6" />
                                    </button>
                                    <button
                                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1"
                                      onClick={() => handleSlider(k.id, "next", (k.gambar ?? []).length)}
                                      type="button"
                                    >
                                      <ChevronRight className="h-6 w-6" />
                                    </button>
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                      {(k.gambar ?? []).map((g, idx) => (
                                        <span
                                          key={idx}
                                          className={`inline-block w-2 h-2 rounded-full ${sliderIndex[k.id] === idx ? "bg-primary" : "bg-white/60"}`}
                                        />
                                      ))}
                                    </div>
                                  </>
                                )}
                              </>
                            ) : (
                              <div className="w-full h-full bg-muted flex items-center justify-center">
                                <span className="text-muted-foreground">Tidak ada gambar</span>
                              </div>
                            )
                          ) : (
                            (k.gambar ?? []).length > 0 ? (
                              <Image
                                src={(k.gambar ?? [])[0]?.url || "/placeholder.png"}
                                alt={k.nama}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-muted flex items-center justify-center">
                                <span className="text-muted-foreground">Tidak ada gambar</span>
                              </div>
                            )
                          )}
                          <Badge
                            className={`absolute top-2 right-2 ${getStatusColor(k.status)}`}
                          >
                            {getStatusLabel(k.status)}
                          </Badge>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-lg mb-2">{k.nama}</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>Hotel: {k.hotel.nama}</p>
                            <p>Tipe: {k.tipe}</p>
                            <p>Kapasitas: {k.kapasitas} orang</p>
                            <p className="font-medium text-foreground">
                              Rp {k.harga.toLocaleString()}
                            </p>
                          </div>
                          <div className="mt-4">
                            <Select value={k.status} onValueChange={(val) => handleStatusChange(k.id, val)} disabled={updating === k.id}>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Ubah status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="TERSEDIA">Tersedia</SelectItem>
                                <SelectItem value="TERISI">Terisi</SelectItem>
                                <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  {kamar.filter((k) => k.status === status).length === 0 && (
                    <div className="col-span-full text-center py-8 text-muted-foreground">
                      Tidak ada kamar dengan status {getStatusLabel(status)}
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 