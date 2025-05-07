"use client"
export const dynamic = "force-dynamic";
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function NewBookingPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<any[]>([])
  const [hotels, setHotels] = useState<any[]>([])
  const [kamars, setKamars] = useState<any[]>([])
  const [selectedKamar, setSelectedKamar] = useState<any>(null)
  const [minDate, setMinDate] = useState("")
  const [selectedHotel, setSelectedHotel] = useState("")

  const [formData, setFormData] = useState({
    userId: "",
    kamarId: "",
    checkIn: "",
    checkOut: "",
    jumlahTamu: "",
    permintaanKhusus: "",
  })

  useEffect(() => {
    // Fetch users
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => toast.error("Gagal memuat data pengguna"))
    // Fetch hotels
    fetch("/api/hotels")
      .then(res => res.json())
      .then(data => setHotels(data))
      .catch(err => toast.error("Gagal memuat data hotel"))
  }, [])

  useEffect(() => {
    // Fetch kamar available setiap kali tanggal atau hotel berubah
    if (formData.checkIn && formData.checkOut && selectedHotel) {
      fetch(`/api/kamar?checkIn=${formData.checkIn}&checkOut=${formData.checkOut}`)
        .then(res => res.json())
        .then(data => setKamars(data.filter((k: any) => k.hotel.id === selectedHotel)))
        .catch(err => toast.error("Gagal memuat data kamar"))
    } else {
      setKamars([])
    }
  }, [formData.checkIn, formData.checkOut, selectedHotel])

  useEffect(() => {
    if (formData.kamarId) {
      const kamar = kamars.find(k => k.id === formData.kamarId)
      setSelectedKamar(kamar)
    } else {
      setSelectedKamar(null)
    }
  }, [formData.kamarId, kamars])

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0])
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Validasi tanggal
    if (!formData.checkIn || !formData.checkOut) {
      toast.error("Tanggal check-in dan check-out wajib diisi")
      setLoading(false)
      return
    }
    if (formData.checkIn >= formData.checkOut) {
      toast.error("Tanggal check-out harus setelah check-in")
      setLoading(false)
      return
    }
    if (!formData.kamarId) {
      toast.error("Pilih kamar terlebih dahulu")
      setLoading(false)
      return
    }
    const jumlahTamuInt = parseInt(formData.jumlahTamu || "0")
    if (selectedKamar && jumlahTamuInt > selectedKamar.kapasitas) {
      toast.error("Jumlah tamu melebihi kapasitas kamar")
      setLoading(false)
      return
    }

    try {
      // Hitung total harga berdasarkan durasi dan harga kamar
      const checkIn = new Date(formData.checkIn)
      const checkOut = new Date(formData.checkOut)
      const durasi = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
      const totalHarga = selectedKamar?.harga * durasi

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          jumlahTamu: jumlahTamuInt,
          totalHarga,
        }),
      })

      if (!response.ok) throw new Error("Gagal membuat booking")

      toast.success("Booking berhasil dibuat")
      router.push("/dashboard-admin-secure/bookings")
    } catch (error) {
      toast.error("Gagal membuat booking")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Tambah Booking Baru</CardTitle>
          <CardDescription>Buat pemesanan kamar hotel baru</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grup 1: Data Pelanggan */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Data Pelanggan</h4>
              <div className="space-y-2 max-w-md">
                <Label htmlFor="userId">Pelanggan</Label>
                <Select
                  value={formData.userId}
                  onValueChange={(value) => setFormData({ ...formData, userId: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih pelanggan" />
                  </SelectTrigger>
                  <SelectContent>
                    {users.filter(user => user.role?.name?.toLowerCase() === 'pengguna').map((user) => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Grup 2: Data Hotel & Kamar */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Hotel & Kamar</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="hotelId">Hotel</Label>
                  <Select
                    value={selectedHotel}
                    onValueChange={(value) => { setSelectedHotel(value); setFormData(f => ({ ...f, kamarId: "" })) }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih hotel" />
                    </SelectTrigger>
                    <SelectContent>
                      {hotels.map((hotel: any) => (
                        <SelectItem key={hotel.id} value={hotel.id}>{hotel.nama}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="kamarId">Kamar</Label>
                  <Select
                    value={formData.kamarId}
                    onValueChange={(value) => setFormData({ ...formData, kamarId: value })}
                    disabled={!formData.checkIn || !formData.checkOut || !selectedHotel || kamars.length === 0}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={(!formData.checkIn || !formData.checkOut || !selectedHotel) ? "Pilih tanggal & hotel dulu" : (kamars.length === 0 ? "Tidak ada kamar tersedia" : "Pilih kamar")}/>
                    </SelectTrigger>
                    <SelectContent>
                      {kamars.map((kamar) => (
                        <SelectItem key={kamar.id} value={kamar.id}>
                          {kamar.nomorKamar} - {kamar.nama} - {kamar.hotel.nama} (Rp {kamar.harga.toLocaleString()}/malam, kapasitas {kamar.kapasitas})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Grup 3: Tanggal & Jumlah Tamu */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Tanggal & Tamu</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="checkIn">Check In</Label>
                  <Input
                    type="date"
                    id="checkIn"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    min={minDate}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkOut">Check Out</Label>
                  <Input
                    type="date"
                    id="checkOut"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    min={formData.checkIn || minDate}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jumlahTamu">Jumlah Tamu</Label>
                  <Input
                    type="number"
                    id="jumlahTamu"
                    value={formData.jumlahTamu}
                    onChange={(e) => setFormData({ ...formData, jumlahTamu: e.target.value })}
                    min={1}
                    max={selectedKamar?.kapasitas || 10}
                    placeholder={selectedKamar ? `Maksimal ${selectedKamar.kapasitas}` : ""}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Grup 4: Permintaan Khusus */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Permintaan Khusus</h4>
              <Textarea
                id="permintaanKhusus"
                value={formData.permintaanKhusus}
                onChange={(e) => setFormData({ ...formData, permintaanKhusus: e.target.value })}
                placeholder="Masukkan permintaan khusus jika ada"
              />
            </div>

            {/* Grup 5: Ringkasan Booking */}
            {selectedKamar && (
              <div className="mb-6 p-4 border rounded bg-muted">
                <h4 className="font-semibold mb-2">Ringkasan Booking</h4>
                <ul className="text-sm space-y-1">
                  <li><b>Hotel:</b> {selectedKamar.hotel.nama}</li>
                  <li><b>Kamar:</b> {selectedKamar.nomorKamar} - {selectedKamar.nama}</li>
                  <li><b>Harga per malam:</b> Rp {selectedKamar.harga.toLocaleString()}</li>
                  <li><b>Kapasitas:</b> {selectedKamar.kapasitas} orang</li>
                  <li><b>Tanggal menginap:</b> {formData.checkIn} s/d {formData.checkOut}</li>
                  <li><b>Jumlah tamu:</b> {formData.jumlahTamu}</li>
                  <li><b>Total harga:</b> {(() => {
                    if (!formData.checkIn || !formData.checkOut) return '-';
                    const checkIn = new Date(formData.checkIn)
                    const checkOut = new Date(formData.checkOut)
                    const durasi = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
                    if (isNaN(durasi) || durasi <= 0) return '-';
                    return `Rp ${(selectedKamar.harga * durasi).toLocaleString()}`
                  })()}</li>
                </ul>
              </div>
            )}

            {/* Tombol */}
            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button" onClick={() => router.back()}>Batal</Button>
              <Button type="submit" disabled={loading}>Simpan Booking</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 