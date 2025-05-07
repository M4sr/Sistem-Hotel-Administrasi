"use client"

import { useState, useEffect } from "react"
export const dynamic = "force-dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { DataTable } from "../../bookings/components/data-table"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function PaymentHistoryPage() {
  const [payments, setPayments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState({ status: "ALL", search: "", hotel: "ALL" })
  const [hotels, setHotels] = useState<any[]>([])
  const [selectedPayment, setSelectedPayment] = useState<any>(null)
  const [showDetail, setShowDetail] = useState(false)

  useEffect(() => {
    fetch("/api/payments")
      .then(res => res.json())
      .then(data => {
        setPayments(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Gagal memuat data pembayaran:", err)
        setLoading(false)
      })
    fetch("/api/hotels")
      .then(res => res.json())
      .then(data => setHotels(data))
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING": return "bg-yellow-500"
      case "DIBAYAR": return "bg-green-500"
      case "GAGAL": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  const filteredPayments = payments.filter(payment => {
    const matchesStatus = filter.status === "ALL" || payment.status === filter.status
    const matchesHotel = filter.hotel === "ALL" || payment.pemesanan?.kamar?.hotel?.id === filter.hotel
    const matchesSearch =
      payment.pemesanan?.user?.name?.toLowerCase().includes(filter.search.toLowerCase()) ||
      payment.pemesanan?.kamar?.nama?.toLowerCase().includes(filter.search.toLowerCase()) ||
      payment.pemesanan?.kamar?.hotel?.nama?.toLowerCase().includes(filter.search.toLowerCase())
    return matchesStatus && matchesHotel && matchesSearch
  })

  function exportCSV() {
    const header = [
      "Pelanggan","Hotel","Nomor Kamar","Kamar","Total","Tanggal","Metode","Status"
    ]
    const rows = filteredPayments.map(p => [
      p.pemesanan?.user?.name || "-",
      p.pemesanan?.kamar?.hotel?.nama || "-",
      p.pemesanan?.kamar?.nomorKamar || "-",
      p.pemesanan?.kamar?.nama || "-",
      p.jumlah,
      format(new Date(p.pemesanan?.checkIn), "dd MMM yyyy", { locale: id }),
      p.metodePembayaran || "-",
      p.status
    ])
    const csv = [header, ...rows].map(r => r.map(x => `"${x}"`).join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "payment-history.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  const columns: ColumnDef<any>[] = [
    { accessorKey: "user", header: "Pelanggan", cell: ({ row }) => row.original.pemesanan?.user?.name || "-" },
    { accessorKey: "hotel", header: "Hotel", cell: ({ row }) => row.original.pemesanan?.kamar?.hotel?.nama || "-" },
    { accessorKey: "kamar", header: "Kamar", cell: ({ row }) => row.original.pemesanan?.kamar?.nama || "-" },
    { accessorKey: "nomorKamar", header: "Nomor Kamar", cell: ({ row }) => row.original.pemesanan?.kamar?.nomorKamar || "-" },
    { accessorKey: "total", header: "Total", cell: ({ row }) => `Rp ${row.original.jumlah?.toLocaleString()}` },
    { accessorKey: "tanggal", header: "Tanggal", cell: ({ row }) => format(new Date(row.original.pemesanan?.checkIn), "dd MMM yyyy", { locale: id }) },
    { accessorKey: "metode", header: "Metode", cell: ({ row }) => row.original.metodePembayaran || "-" },
    { accessorKey: "status", header: "Status", cell: ({ row }) => <Badge className={getStatusColor(row.original.status)}>{row.original.status}</Badge> },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original
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
                setSelectedPayment(payment)
                setShowDetail(true)
              }}>Detail</DropdownMenuItem>
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
          <CardTitle>Riwayat Pembayaran</CardTitle>
          <CardDescription>Lihat semua riwayat pembayaran</CardDescription>
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
                <SelectItem value="REJECTED">Rejected</SelectItem>
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
            <DataTable columns={columns} data={filteredPayments} />
          )}
        </CardContent>
      </Card>

      <Dialog open={showDetail} onOpenChange={setShowDetail}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Detail Pembayaran</DialogTitle>
          </DialogHeader>
          {selectedPayment && (
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Informasi Pelanggan</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Nama</p>
                    <p>{selectedPayment.pemesanan?.user?.name || "-"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>{selectedPayment.pemesanan?.user?.email || "-"}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Informasi Hotel</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Hotel</p>
                    <p>{selectedPayment.pemesanan?.kamar?.hotel?.nama || "-"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Alamat</p>
                    <p>{selectedPayment.pemesanan?.kamar?.hotel?.alamat || "-"}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Informasi Kamar</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Nomor Kamar</p>
                    <p>{selectedPayment.pemesanan?.kamar?.nomorKamar || "-"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Tipe Kamar</p>
                    <p>{selectedPayment.pemesanan?.kamar?.nama || "-"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Kapasitas</p>
                    <p>{selectedPayment.pemesanan?.kamar?.kapasitas || "-"} orang</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Informasi Booking</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Check In</p>
                    <p>{format(new Date(selectedPayment.pemesanan?.checkIn), "dd MMM yyyy", { locale: id })}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Check Out</p>
                    <p>{format(new Date(selectedPayment.pemesanan?.checkOut), "dd MMM yyyy", { locale: id })}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Jumlah Tamu</p>
                    <p>{selectedPayment.pemesanan?.jumlahTamu} orang</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Informasi Pembayaran</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Metode Pembayaran</p>
                    <p>{selectedPayment.metodePembayaran || "-"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Tanggal Pembayaran</p>
                    <p>{format(new Date(selectedPayment.pemesanan?.checkIn), "dd MMM yyyy", { locale: id })}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge className={getStatusColor(selectedPayment.status)}>
                      {selectedPayment.status}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Total Pembayaran</h3>
                  <p className="text-2xl font-bold">Rp {selectedPayment.jumlah?.toLocaleString()}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
} 