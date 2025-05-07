"use client"
export const dynamic = "force-dynamic";
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "./components/data-table"
import { ColumnDef } from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { MoreHorizontal, Edit, Trash } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function BookingsPage() {
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState({ status: "ALL", search: "" })

  useEffect(() => {
    fetch("/api/bookings").then(res => res.json()).then(data => {
      setBookings(data)
      setLoading(false)
    })
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-500"
      case "CONFIRMED":
        return "bg-green-500"
      case "CANCELLED":
        return "bg-red-500"
      case "COMPLETED":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const filteredBookings = bookings.filter(b => {
    const matchesStatus = filter.status === "ALL" || b.status === filter.status
    const matchesSearch =
      (b.user?.name?.toLowerCase().includes(filter.search.toLowerCase()) ||
        b.kamar?.nama?.toLowerCase().includes(filter.search.toLowerCase()) ||
        b.kamar?.hotel?.nama?.toLowerCase().includes(filter.search.toLowerCase()))
    return matchesStatus && matchesSearch
  })

  const handleEdit = (row: any) => {
    window.location.href = `/dashboard-admin-secure/bookings/edit/${row.id}`
  }
  const handleDelete = async (row: any) => {
    if (confirm(`Hapus booking untuk ${row.user?.name || row.userId}?`)) {
      try {
        const res = await fetch(`/api/bookings/${row.id}`, { method: "DELETE" })
        if (!res.ok) throw new Error("Gagal menghapus booking")
        setBookings(bookings.filter(b => b.id !== row.id))
      } catch (e) {
        alert("Gagal menghapus booking")
      }
    }
  }

  function exportCSV() {
    const header = [
      "Pelanggan","Hotel","Kamar","Check In","Check Out","Jumlah Tamu","Total Harga","Status","Pembayaran"
    ]
    const rows = filteredBookings.map(b => [
      b.user?.name || b.userId,
      b.kamar?.hotel?.nama || "-",
      b.kamar?.nama || "-",
      new Date(b.checkIn).toLocaleDateString(),
      new Date(b.checkOut).toLocaleDateString(),
      b.jumlahTamu,
      b.totalHarga,
      b.status,
      b.pembayaran?.status || "-"
    ])
    const csv = [header, ...rows].map(r => r.map(x => `"${x}"`).join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "bookings.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "user",
      header: "Pelanggan",
      cell: ({ row }) => row.original.user?.name || row.original.userId,
    },
    {
      accessorKey: "hotel",
      header: "Hotel",
      cell: ({ row }) => row.original.kamar?.hotel?.nama || "-",
    },
    {
      accessorKey: "kamar",
      header: "Kamar",
      cell: ({ row }) => row.original.kamar?.nama || "-",
    },
    {
      accessorKey: "checkIn",
      header: "Check In",
      cell: ({ row }) => new Date(row.original.checkIn).toLocaleDateString(),
    },
    {
      accessorKey: "checkOut",
      header: "Check Out",
      cell: ({ row }) => new Date(row.original.checkOut).toLocaleDateString(),
    },
    {
      accessorKey: "jumlahTamu",
      header: "Jumlah Tamu",
    },
    {
      accessorKey: "totalHarga",
      header: "Total Harga",
      cell: ({ row }) => `Rp ${row.original.totalHarga.toLocaleString()}`,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <Badge className={getStatusColor(row.original.status)}>{row.original.status}</Badge>,
    },
    {
      accessorKey: "pembayaran",
      header: "Pembayaran",
      cell: ({ row }) => row.original.pembayaran ? (
        <Badge className={getStatusColor(row.original.pembayaran.status)}>{row.original.pembayaran.status}</Badge>
      ) : <span className="text-gray-500">-</span>,
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row, table }) => {
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
              <DropdownMenuItem onClick={() => handleEdit(booking)}>
                <Edit className="mr-2 h-4 w-4" /> Edit Booking
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(booking)}>
                <Trash className="mr-2 h-4 w-4" /> Hapus Booking
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
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Daftar Booking</CardTitle>
              <CardDescription>Kelola pemesanan kamar hotel</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={exportCSV}>Export CSV</Button>
              <Button asChild>
                <Link href="/dashboard-admin-secure/bookings/new">Tambah Booking</Link>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-between">
            <div className="flex-1">
              <Input
                placeholder="Cari nama, kamar, atau hotel..."
                value={filter.search}
                onChange={e => setFilter({ ...filter, search: e.target.value })}
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
          </div>
          {loading ? (
            <div className="text-center py-8">Memuat data...</div>
          ) : (
            <DataTable columns={columns} data={filteredBookings} />
          )}
        </CardContent>
      </Card>
    </div>
  )
} 