"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { DataTable } from "../../bookings/components/data-table"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Check, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "sonner"

export default function PendingPaymentsPage() {
  const [payments, setPayments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState({ search: "", hotel: "ALL" })
  const [hotels, setHotels] = useState<any[]>([])
  const [selectedPayment, setSelectedPayment] = useState<any>(null)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [showRejectDialog, setShowRejectDialog] = useState(false)

  useEffect(() => {
    fetch("/api/payments?status=PENDING")
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

  const handleConfirmPayment = async () => {
    try {
      const res = await fetch(`/api/payments/${selectedPayment.id}/confirm`, {
        method: "POST"
      })
      if (!res.ok) throw new Error("Gagal mengkonfirmasi pembayaran")
      
      setPayments(payments.filter(p => p.id !== selectedPayment.id))
      setShowConfirmDialog(false)
      toast.success("Pembayaran berhasil dikonfirmasi")
    } catch (error) {
      console.error(error)
      toast.error("Gagal mengkonfirmasi pembayaran")
    }
  }

  const handleRejectPayment = async () => {
    try {
      const res = await fetch(`/api/payments/${selectedPayment.id}/reject`, {
        method: "POST"
      })
      if (!res.ok) throw new Error("Gagal menolak pembayaran")
      
      setPayments(payments.filter(p => p.id !== selectedPayment.id))
      setShowRejectDialog(false)
      toast.success("Pembayaran berhasil ditolak")
    } catch (error) {
      console.error(error)
      toast.error("Gagal menolak pembayaran")
    }
  }

  const filteredPayments = payments.filter(payment => {
    const matchesHotel = filter.hotel === "ALL" || payment.pemesanan?.kamar?.hotel?.id === filter.hotel
    const matchesSearch =
      payment.pemesanan?.user?.name?.toLowerCase().includes(filter.search.toLowerCase()) ||
      payment.pemesanan?.kamar?.nama?.toLowerCase().includes(filter.search.toLowerCase()) ||
      payment.pemesanan?.kamar?.hotel?.nama?.toLowerCase().includes(filter.search.toLowerCase())
    return matchesHotel && matchesSearch
  })

  const columns: ColumnDef<any>[] = [
    { accessorKey: "user", header: "Pelanggan", cell: ({ row }) => row.original.pemesanan?.user?.name || "-" },
    { accessorKey: "hotel", header: "Hotel", cell: ({ row }) => row.original.pemesanan?.kamar?.hotel?.nama || "-" },
    { accessorKey: "kamar", header: "Kamar", cell: ({ row }) => row.original.pemesanan?.kamar?.nama || "-" },
    { accessorKey: "nomorKamar", header: "Nomor Kamar", cell: ({ row }) => row.original.pemesanan?.kamar?.nomorKamar || "-" },
    { accessorKey: "total", header: "Total", cell: ({ row }) => `Rp ${row.original.jumlah?.toLocaleString()}` },
    { accessorKey: "tanggal", header: "Tanggal", cell: ({ row }) => format(new Date(row.original.pemesanan?.checkIn), "dd MMM yyyy", { locale: id }) },
    { accessorKey: "metode", header: "Metode", cell: ({ row }) => row.original.metodePembayaran || "-" },
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
                setShowConfirmDialog(true)
              }}>
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Konfirmasi
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {
                setSelectedPayment(payment)
                setShowRejectDialog(true)
              }}>
                <X className="mr-2 h-4 w-4 text-red-500" />
                Tolak
              </DropdownMenuItem>
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
          <CardTitle>Pembayaran Pending</CardTitle>
          <CardDescription>Kelola pembayaran yang menunggu konfirmasi</CardDescription>
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

      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Konfirmasi Pembayaran</DialogTitle>
            <DialogDescription>
              Apakah Anda yakin ingin mengkonfirmasi pembayaran ini?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>Batal</Button>
            <Button onClick={handleConfirmPayment}>Konfirmasi</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tolak Pembayaran</DialogTitle>
            <DialogDescription>
              Apakah Anda yakin ingin menolak pembayaran ini?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRejectDialog(false)}>Batal</Button>
            <Button variant="destructive" onClick={handleRejectPayment}>Tolak</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
} 