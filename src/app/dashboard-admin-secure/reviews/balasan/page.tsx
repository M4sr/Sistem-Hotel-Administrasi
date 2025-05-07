'use client'

import { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

interface Hotel {
  id: string
  nama: string
}

interface Admin {
  id: string
  name: string | null
}

interface BalasanUlasan {
  id: string
  isi: string
  createdAt: string
  admin: Admin
  ulasan: {
    komentar: string | null
    user: {
      name: string | null
      email: string | null
    }
    hotel: {
      id: string
      nama: string
    }
  }
}

export default function BalasanUlasanPage() {
  const [balasan, setBalasan] = useState<BalasanUlasan[]>([])
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [admins, setAdmins] = useState<Admin[]>([])
  const [selectedHotel, setSelectedHotel] = useState<string>('all')
  const [selectedAdmin, setSelectedAdmin] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchHotels()
    fetchBalasan()
  }, [])

  const fetchHotels = async () => {
    try {
      const response = await fetch('/api/hotels')
      const data = await response.json()
      setHotels(data)
    } catch (error) {
      toast.error('Gagal mengambil data hotel')
    }
  }

  const fetchBalasan = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/reviews/balasan')
      const data = await response.json()
      setBalasan(data)
      // Ambil unique admin
      const uniqueAdmins = Array.from(new Set(data.map((b: BalasanUlasan) => b.admin.id)))
        .map(id => {
          const found = data.find((b: BalasanUlasan) => b.admin.id === id)
          return found ? found.admin : null
        })
        .filter(Boolean) as Admin[]
      setAdmins(uniqueAdmins)
    } catch (error) {
      toast.error('Gagal mengambil data balasan')
    } finally {
      setLoading(false)
    }
  }

  const filteredBalasan = balasan.filter(b => {
    const matchesHotel = selectedHotel === 'all' || b.ulasan.hotel.id === selectedHotel
    const matchesAdmin = selectedAdmin === 'all' || b.admin.id === selectedAdmin
    const matchesSearch = b.isi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.ulasan.komentar?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.ulasan.user.name?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesHotel && matchesAdmin && matchesSearch
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Semua Balasan Ulasan</h1>
      <div className="flex gap-4 mb-6">
        <Select value={selectedHotel} onValueChange={setSelectedHotel}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter Hotel" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Hotel</SelectItem>
            {hotels.map(hotel => (
              <SelectItem key={hotel.id} value={hotel.id}>{hotel.nama}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedAdmin} onValueChange={setSelectedAdmin}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter Admin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Admin</SelectItem>
            {admins.map(admin => (
              <SelectItem key={admin.id} value={admin.id}>{admin.name || admin.id}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="Cari balasan/ulasan..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[300px]"
        />
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Hotel</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Komentar Ulasan</TableHead>
              <TableHead>Isi Balasan</TableHead>
              <TableHead>Admin</TableHead>
              <TableHead>Tanggal Balas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">Loading...</TableCell>
              </TableRow>
            ) : filteredBalasan.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">Tidak ada balasan</TableCell>
              </TableRow>
            ) : (
              filteredBalasan.map((b) => (
                <TableRow key={b.id}>
                  <TableCell>{b.ulasan.hotel.nama}</TableCell>
                  <TableCell>{b.ulasan.user.name || b.ulasan.user.email}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{b.ulasan.komentar}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{b.isi}</TableCell>
                  <TableCell>{b.admin.name || b.admin.id}</TableCell>
                  <TableCell>{new Date(b.createdAt).toLocaleDateString('id-ID')}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 