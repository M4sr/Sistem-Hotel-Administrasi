"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatCurrency } from "@/lib/utils"
import { CalendarIcon, DownloadIcon, FilterIcon } from "lucide-react"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"

interface LaporanPemesanan {
  id: string
  tanggal: string
  hotel: string
  kamar: string
  pelanggan: string
  checkIn: string
  checkOut: string
  totalHarga: number
  status: string
}

interface Hotel {
  id: string
  nama: string
}

export default function LaporanPage() {
  const [tanggalMulai, setTanggalMulai] = useState("")
  const [tanggalSelesai, setTanggalSelesai] = useState("")
  const [status, setStatus] = useState("ALL")
  const [hotel, setHotel] = useState("ALL")
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [dataLaporan, setDataLaporan] = useState<LaporanPemesanan[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  // Ambil daftar hotel saat komponen dimuat
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("/api/hotels")
        setHotels(response.data)
      } catch (error) {
        console.error("Error fetching hotels:", error)
        toast({
          title: "Error",
          description: "Gagal mengambil data hotel",
          variant: "destructive",
        })
      }
    }

    fetchHotels()
  }, [toast])

  // Ambil data laporan saat filter berubah
  const fetchLaporan = async () => {
    setIsLoading(true)
    try {
      const params = new URLSearchParams()
      if (tanggalMulai) params.append("tanggalMulai", tanggalMulai)
      if (tanggalSelesai) params.append("tanggalSelesai", tanggalSelesai)
      if (status && status !== "ALL") params.append("status", status)
      if (hotel && hotel !== "ALL") params.append("hotelId", hotel)

      const response = await axios.get(`/api/laporan?${params.toString()}`)
      setDataLaporan(response.data)
    } catch (error) {
      console.error("Error fetching laporan:", error)
      toast({
        title: "Error",
        description: "Gagal mengambil data laporan",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleFilter = () => {
    fetchLaporan()
  }

  const handleExport = async () => {
    try {
      const params = new URLSearchParams()
      if (tanggalMulai) params.append("tanggalMulai", tanggalMulai)
      if (tanggalSelesai) params.append("tanggalSelesai", tanggalSelesai)
      if (status && status !== "ALL") params.append("status", status)
      if (hotel && hotel !== "ALL") params.append("hotelId", hotel)

      const response = await axios.get(`/api/laporan/export?${params.toString()}`, {
        responseType: "blob"
      })

      // Buat URL untuk file yang akan diunduh
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", `laporan-${new Date().toISOString().split("T")[0]}.xlsx`)
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch (error) {
      console.error("Error exporting laporan:", error)
      toast({
        title: "Error",
        description: "Gagal mengekspor data laporan",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Laporan Pemesanan</h1>
        <Button onClick={handleExport} disabled={isLoading}>
          <DownloadIcon className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filter Laporan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Tanggal Mulai</label>
              <div className="relative">
                <CalendarIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="date"
                  value={tanggalMulai}
                  onChange={(e) => setTanggalMulai(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Tanggal Selesai</label>
              <div className="relative">
                <CalendarIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="date"
                  value={tanggalSelesai}
                  onChange={(e) => setTanggalSelesai(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">Semua</SelectItem>
                  <SelectItem value="PENDING">Pending</SelectItem>
                  <SelectItem value="ACTIVE">Active</SelectItem>
                  <SelectItem value="COMPLETED">Completed</SelectItem>
                  <SelectItem value="CANCELLED">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Hotel</label>
              <Select value={hotel} onValueChange={setHotel}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Hotel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">Semua</SelectItem>
                  {hotels.map((h) => (
                    <SelectItem key={h.id} value={h.id}>
                      {h.nama}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button onClick={handleFilter} disabled={isLoading}>
              <FilterIcon className="mr-2 h-4 w-4" />
              {isLoading ? "Memuat..." : "Filter"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Hotel</TableHead>
                <TableHead>Kamar</TableHead>
                <TableHead>Pelanggan</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Total Harga</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={9} className="text-center py-4">
                    Memuat data...
                  </TableCell>
                </TableRow>
              ) : dataLaporan.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="text-center py-4">
                    Tidak ada data yang ditemukan
                  </TableCell>
                </TableRow>
              ) : (
                dataLaporan.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.tanggal}</TableCell>
                    <TableCell>{item.hotel}</TableCell>
                    <TableCell>{item.kamar}</TableCell>
                    <TableCell>{item.pelanggan}</TableCell>
                    <TableCell>{item.checkIn}</TableCell>
                    <TableCell>{item.checkOut}</TableCell>
                    <TableCell>{formatCurrency(item.totalHarga)}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        item.status === "COMPLETED" ? "bg-green-100 text-green-800" :
                        item.status === "ACTIVE" ? "bg-blue-100 text-blue-800" :
                        item.status === "PENDING" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {item.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 