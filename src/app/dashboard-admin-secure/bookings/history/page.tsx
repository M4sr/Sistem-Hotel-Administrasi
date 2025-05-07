"use client"
export const dynamic = "force-dynamic";
import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { DataTable } from "../components/data-table"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function BookingHistoryPage() {
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState({ status: "ALL", search: "", hotel: "ALL" })
  const [hotels, setHotels] = useState<any[]>([])
  const [selectedBooking, setSelectedBooking] = useState<any>(null)
  const [showDetail, setShowDetail] = useState(false)
  const [showPaymentDialog, setShowPaymentDialog] = useState(false)
  const [paymentFile, setPaymentFile] = useState<File | null>(null)
  const [paymentNote, setPaymentNote] = useState("")
  const [paymentLoading, setPaymentLoading] = useState(false)

  useEffect(() => {
    fetch("/api/bookings")
      .then(res => res.json())
      .then(data => {
        setBookings(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Gagal memuat data booking:", err)
        setLoading(false)
      })
    fetch("/api/hotels")
      .then(res => res.json())
      .then(data => setHotels(data))
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING": return "bg-yellow-500"
      case "CONFIRMED": return "bg-green-500"
      case "CANCELLED": return "bg-red-500"
      case "COMPLETED": return "bg-blue-500"
      default: return "bg-gray-500"
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "PENDING": return "bg-yellow-500"
      case "DIBAYAR": return "bg-green-500"
      case "GAGAL": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  const filteredBookings = bookings.filter(booking => {
    const matchesStatus = filter.status === "ALL" || booking.status === filter.status
    const matchesHotel = filter.hotel === "ALL" || booking.kamar?.hotel?.id === filter.hotel
    const matchesSearch =
      booking.user?.name?.toLowerCase().includes(filter.search.toLowerCase()) ||
      booking.kamar?.nama?.toLowerCase().includes(filter.search.toLowerCase()) ||
      booking.kamar?.hotel?.nama?.toLowerCase().includes(filter.search.toLowerCase())
    return matchesStatus && matchesHotel && matchesSearch
  })

  function exportCSV() {
    const header = [
      "Pelanggan","Hotel","Nomor Kamar","Kamar","Check In","Check Out","Total","Status","Pembayaran"
    ]
    const rows = filteredBookings.map(b => [
      b.user?.name || b.userId,
      b.kamar?.hotel?.nama || "-",
      b.kamar?.nomorKamar || "-",
      b.kamar?.nama || "-",
      format(new Date(b.checkIn), "dd MMM yyyy", { locale: id }),
      format(new Date(b.checkOut), "dd MMM yyyy", { locale: id }),
      b.totalHarga,
      b.status,
      b.pembayaran?.status || "-"
    ])
    const csv = [header, ...rows].map(r => r.map(x => `"${x}"`).join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "booking-history.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  const handlePaymentSubmit = async () => {
    if (!selectedBooking?.pembayaran) return
    setPaymentLoading(true)
    try {
      // Simulasi upload bukti pembayaran (bisa dikembangkan sesuai kebutuhan)
      const formData = new FormData()
      formData.append("metodePembayaran", selectedBooking.pembayaran.metodePembayaran || "TRANSFER")
      if (paymentFile) formData.append("buktiPembayaran", paymentFile)
      formData.append("catatan", paymentNote)
      // API endpoint untuk update pembayaran user
      await fetch(`/api/payments/${selectedBooking.pembayaran.id}/pay`, {
        method: "POST",
        body: formData
      })
      setShowPaymentDialog(false)
      setPaymentFile(null)
      setPaymentNote("")
      // Optional: refresh data booking
      window.location.reload()
    } catch (error) {
      alert("Gagal mengirim pembayaran")
    } finally {
      setPaymentLoading(false)
    }
  }

  const columns: ColumnDef<any>[] = [
    { accessorKey: "user", header: "Pelanggan", cell: ({ row }) => row.original.user?.name || row.original.userId },
    { accessorKey: "hotel", header: "Hotel", cell: ({ row }) => row.original.kamar?.hotel?.nama || "-" },
    { accessorKey: "nomorKamar", header: "Nomor Kamar", cell: ({ row }) => row.original.kamar?.nomorKamar || "-" },
    { accessorKey: "kamar", header: "Kamar", cell: ({ row }) => row.original.kamar?.nama || "-" },
    { accessorKey: "checkIn", header: "Check In", cell: ({ row }) => format(new Date(row.original.checkIn), "dd MMM yyyy", { locale: id }) },
    { accessorKey: "checkOut", header: "Check Out", cell: ({ row }) => format(new Date(row.original.checkOut), "dd MMM yyyy", { locale: id }) },
    { accessorKey: "totalHarga", header: "Total", cell: ({ row }) => `Rp ${row.original.totalHarga?.toLocaleString()}` },
    { accessorKey: "status", header: "Status", cell: ({ row }) => <Badge className={getStatusColor(row.original.status)}>{row.original.status}</Badge> },
    { accessorKey: "pembayaran", header: "Pembayaran", cell: ({ row }) => row.original.pembayaran ? (
      <div className="flex items-center gap-2">
        <Badge className={getPaymentStatusColor(row.original.pembayaran.status)}>{row.original.pembayaran.status}</Badge>
        {row.original.pembayaran.status === "PENDING" && (
          <Button size="sm" variant="outline" onClick={() => { setSelectedBooking(row.original); setShowPaymentDialog(true) }}>Bayar</Button>
        )}
      </div>
    ) : <Badge className="bg-gray-500">-</Badge> },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const booking = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Buka menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Aksi</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => {
                setSelectedBooking(booking)
                setShowDetail(true)
              }}>Detail</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive" onClick={() => alert("Fitur hapus belum diimplementasi")}>Hapus</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Booking</CardTitle>
          <CardDescription>Lihat riwayat pemesanan kamar hotel</CardDescription>
          <div className="flex gap-2 mt-4">
            <Button variant="outline" onClick={exportCSV}>Export CSV</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-between">
            <div className="flex-1">
              <Input
                placeholder="Cari berdasarkan nama, kamar, atau hotel..."
                value={filter.search}
                onChange={(e) => setFilter({ ...filter, search: e.target.value })}
              />
            </div>
            <Select value={filter.status} onValueChange={val => setFilter({ ...filter, status: val })}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">Semua Status</SelectItem>
                <SelectItem value="PENDING">Pending</SelectItem>
                <SelectItem value="CONFIRMED">Confirmed</SelectItem>
                <SelectItem value="CANCELLED">Cancelled</SelectItem>
                <SelectItem value="COMPLETED">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filter.hotel} onValueChange={val => setFilter({ ...filter, hotel: val })}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter hotel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">Semua Hotel</SelectItem>
                {hotels.map((h: any) => (
                  <SelectItem key={h.id} value={h.id}>{h.nama}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {loading ? (
            <div className="text-center py-8">Memuat data...</div>
          ) : (
            <DataTable columns={columns} data={filteredBookings} />
          )}
        </CardContent>
      </Card>

      <Dialog open={showDetail} onOpenChange={setShowDetail}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Detail Booking</DialogTitle>
          </DialogHeader>
          {selectedBooking && (
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Informasi Pelanggan</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Nama</p>
                    <p>{selectedBooking.user?.name || selectedBooking.userId}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>{selectedBooking.user?.email || "-"}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Informasi Hotel</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Hotel</p>
                    <p>{selectedBooking.kamar?.hotel?.nama || "-"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Alamat</p>
                    <p>{selectedBooking.kamar?.hotel?.alamat || "-"}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Informasi Kamar</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Nomor Kamar</p>
                    <p>{selectedBooking.kamar?.nomorKamar || "-"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Tipe Kamar</p>
                    <p>{selectedBooking.kamar?.nama || "-"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Kapasitas</p>
                    <p>{selectedBooking.kamar?.kapasitas || "-"} orang</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Informasi Booking</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Check In</p>
                    <p>{format(new Date(selectedBooking.checkIn), "dd MMM yyyy", { locale: id })}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Check Out</p>
                    <p>{format(new Date(selectedBooking.checkOut), "dd MMM yyyy", { locale: id })}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Jumlah Tamu</p>
                    <p>{selectedBooking.jumlahTamu} orang</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Status Booking</h3>
                  <Badge className={getStatusColor(selectedBooking.status)}>{selectedBooking.status}</Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Status Pembayaran</h3>
                  {selectedBooking.pembayaran ? (
                    <Badge className={getPaymentStatusColor(selectedBooking.pembayaran.status)}>
                      {selectedBooking.pembayaran.status}
                    </Badge>
                  ) : (
                    <Badge className="bg-gray-500">Belum Ada Pembayaran</Badge>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Total Pembayaran</h3>
                <p className="text-2xl font-bold">Rp {selectedBooking.pembayaran?.jumlah?.toLocaleString() || '0'}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Form Pembayaran</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Metode Pembayaran</Label>
              <Input value={selectedBooking?.pembayaran?.metodePembayaran || "TRANSFER"} disabled />
            </div>
            <div>
              <Label>Bukti Pembayaran (opsional)</Label>
              <Input type="file" accept="image/*" onChange={e => setPaymentFile(e.target.files?.[0] || null)} />
            </div>
            <div>
              <Label>Catatan (opsional)</Label>
              <Textarea value={paymentNote} onChange={e => setPaymentNote(e.target.value)} placeholder="Catatan tambahan" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPaymentDialog(false)}>Batal</Button>
            <Button onClick={handlePaymentSubmit} disabled={paymentLoading}>{paymentLoading ? "Menyimpan..." : "Kirim Pembayaran"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
} 