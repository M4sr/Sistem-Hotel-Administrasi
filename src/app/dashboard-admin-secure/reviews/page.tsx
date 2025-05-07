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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface Hotel {
  id: string
  nama: string
}

interface Ulasan {
  id: string
  rating: number
  komentar: string | null
  createdAt: string
  user: {
    name: string | null
    email: string | null
  }
  hotel: {
    id: string
    nama: string
  }
  balasanUlasan: {
    id: string
    isi: string
    createdAt: string
    admin: {
      name: string | null
    }
  }[]
  gambar: {
    url: string
  }[]
}

export default function ReviewsPage() {
  const [ulasan, setUlasan] = useState<Ulasan[]>([])
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedHotel, setSelectedHotel] = useState<string>('all')
  const [selectedRating, setSelectedRating] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [replyDialogOpen, setReplyDialogOpen] = useState(false)
  const [selectedUlasan, setSelectedUlasan] = useState<Ulasan | null>(null)
  const [replyText, setReplyText] = useState('')

  useEffect(() => {
    fetchHotels()
    fetchUlasan()
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

  const fetchUlasan = async () => {
    try {
      const response = await fetch('/api/reviews')
      const data = await response.json()
      setUlasan(data)
    } catch (error) {
      toast.error('Gagal mengambil data ulasan')
    } finally {
      setLoading(false)
    }
  }

  const handleReply = async () => {
    if (!selectedUlasan || !replyText.trim()) return

    try {
      const response = await fetch(`/api/reviews/${selectedUlasan.id}/reply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isi: replyText }),
      })

      if (!response.ok) throw new Error('Gagal mengirim balasan')

      toast.success('Balasan berhasil dikirim')
      setReplyDialogOpen(false)
      setReplyText('')
      fetchUlasan() // Refresh data
    } catch (error) {
      toast.error('Gagal mengirim balasan')
    }
  }

  const filteredUlasan = ulasan.filter(ulasan => {
    const matchesHotel = selectedHotel === 'all' || ulasan.hotel.id === selectedHotel
    const matchesRating = selectedRating === 'all' || ulasan.rating === parseInt(selectedRating)
    const matchesSearch = ulasan.komentar?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ulasan.user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ulasan.hotel.nama.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesHotel && matchesRating && matchesSearch
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Kelola Ulasan</h1>
      
      {/* Filters */}
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

        <Select value={selectedRating} onValueChange={setSelectedRating}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Rating</SelectItem>
            {[1, 2, 3, 4, 5].map(rating => (
              <SelectItem key={rating} value={rating.toString()}>
                {rating} Bintang
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          placeholder="Cari ulasan..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[300px]"
        />
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Hotel</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Komentar</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Balasan</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center">Loading...</TableCell>
              </TableRow>
            ) : filteredUlasan.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center">Tidak ada ulasan</TableCell>
              </TableRow>
            ) : (
              filteredUlasan.map((ulasan) => (
                <TableRow key={ulasan.id}>
                  <TableCell>{ulasan.user.name || ulasan.user.email}</TableCell>
                  <TableCell>{ulasan.hotel.nama}</TableCell>
                  <TableCell>{ulasan.rating} ⭐</TableCell>
                  <TableCell className="max-w-[200px] truncate">{ulasan.komentar}</TableCell>
                  <TableCell>{new Date(ulasan.createdAt).toLocaleDateString('id-ID')}</TableCell>
                  <TableCell>
                    {ulasan.balasanUlasan.length > 0 ? (
                      <span className="text-green-600">Sudah dibalas</span>
                    ) : (
                      <span className="text-red-600">Belum dibalas</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Dialog open={replyDialogOpen && selectedUlasan?.id === ulasan.id} onOpenChange={setReplyDialogOpen}>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setSelectedUlasan(ulasan)
                            setReplyDialogOpen(true)
                          }}
                        >
                          Balas
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Balas Ulasan</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <p className="font-medium">Ulasan:</p>
                            <p className="text-sm text-gray-600">{ulasan.komentar}</p>
                          </div>
                          <Textarea
                            placeholder="Tulis balasan..."
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                          />
                          <Button onClick={handleReply}>Kirim Balasan</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 