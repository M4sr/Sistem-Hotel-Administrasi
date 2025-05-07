"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function EditKamarPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string
  const [hotels, setHotels] = useState<{id: string, nama: string}[]>([])
  const [fasilitasList, setFasilitasList] = useState<{id: string, nama: string, ikon?: string}[]>([])
  const [nama, setNama] = useState("")
  const [nomorKamar, setNomorKamar] = useState("")
  const [hotelId, setHotelId] = useState("")
  const [harga, setHarga] = useState(0)
  const [kapasitas, setKapasitas] = useState(1)
  const [tipe, setTipe] = useState("")
  const [status, setStatus] = useState("TERSEDIA")
  const [selectedFasilitas, setSelectedFasilitas] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<File[]>([])
  const [gambarLama, setGambarLama] = useState<string[]>([])
  const [error, setError] = useState("")
  const [imageError, setImageError] = useState("")
  const MAX_IMAGES = 5

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("/api/hotels")
        if (!res.ok) throw new Error("Gagal mengambil data hotel")
        const data = await res.json()
        setHotels(data)
      } catch (e) {
        setError("Gagal mengambil data hotel")
      }
    }
    fetchHotels()
  }, [])

  useEffect(() => {
    if (!hotelId) return;
    const fetchFasilitas = async () => {
      try {
        const res = await fetch(`/api/fasilitas?hotelId=${hotelId}`)
        if (!res.ok) throw new Error("Gagal mengambil data fasilitas")
        const data = await res.json()
        setFasilitasList(data)
        setSelectedFasilitas([]) // reset fasilitas jika hotel berubah
      } catch (e) {
        setError("Gagal mengambil data fasilitas")
      }
    }
    fetchFasilitas()
  }, [hotelId])

  useEffect(() => {
    const fetchKamar = async () => {
      try {
        const res = await fetch(`/api/kamar/${id}`)
        if (!res.ok) throw new Error("Gagal mengambil data kamar")
        const data = await res.json()
        setNama(data.nama)
        setNomorKamar(data.nomorKamar)
        setHotelId(data.hotelId)
        setHarga(data.harga)
        setKapasitas(data.kapasitas)
        setTipe(data.tipe)
        setStatus(data.status)
        setGambarLama((data.gambar || []).map((g: any) => g.url))
        setSelectedFasilitas(data.fasilitas?.map((f: any) => f.id) || [])
      } catch (e) {
        setError("Gagal mengambil data kamar")
      }
    }
    fetchKamar()
  }, [id])

  const onDrop = (acceptedFiles: File[]) => {
    if (images.length + gambarLama.length + acceptedFiles.length > MAX_IMAGES) {
      setImageError(`Maksimal ${MAX_IMAGES} gambar untuk setiap kamar`)
      return
    }
    setImageError("")
    setImages(prev => [...prev, ...acceptedFiles])
  }

  const removeImage = (index: number, isNew: boolean) => {
    if (isNew) {
      setImages(prev => prev.filter((_, i) => i !== index))
    } else {
      setGambarLama(prev => prev.filter((_, i) => i !== index))
    }
    setImageError("")
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: { 'image/*': [] }, 
    multiple: true,
    maxFiles: MAX_IMAGES - (images.length + gambarLama.length)
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      // Upload gambar baru ke /api/upload
      let gambarUrls: string[] = [...gambarLama]
      let uploaded: string[] = []
      if (images.length > 0) {
        uploaded = await Promise.all(images.map(async (file) => {
          const formData = new FormData()
          formData.append("file", file)
          const res = await fetch("/api/upload", { method: "POST", body: formData })
          if (!res.ok) throw new Error("Gagal upload gambar")
          const data = await res.json()
          return data.url
        }))
        gambarUrls = [...gambarUrls, ...uploaded]
      }

      // PATCH data kamar ke /api/kamar/[id]
      const res = await fetch(`/api/kamar/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama,
          nomorKamar,
          hotelId,
          harga,
          kapasitas,
          tipe,
          status,
          fasilitas: selectedFasilitas,
        })
      })

      if (!res.ok) throw new Error("Gagal mengedit kamar")

      // Hapus gambar lama yang dihapus
      const gambarLamaIds = await fetch(`/api/gambar?kamarId=${id}`).then(res => res.json())
      const gambarLamaUrls = gambarLamaIds.map((g: any) => g.url)
      const gambarTerhapus = gambarLamaUrls.filter((url: string) => !gambarLama.includes(url))
      
      if (gambarTerhapus.length > 0) {
        await Promise.all(gambarTerhapus.map(async (url: string) => {
          const gambarId = gambarLamaIds.find((g: any) => g.url === url)?.id
          if (gambarId) {
            await fetch(`/api/gambar/${gambarId}`, { method: "DELETE" })
          }
        }))
      }

      // Simpan gambar baru ke database
      if (images.length > 0) {
        await Promise.all(uploaded.map(async (url: string) => {
          const gambarRes = await fetch("/api/gambar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              url,
              kamarId: id
            })
          })
          if (!gambarRes.ok) throw new Error("Gagal menyimpan gambar")
        }))
      }

      window.location.href = "/dashboard-admin-secure/kamar"
    } catch (e: any) {
      setError(e.message || "Terjadi kesalahan")
    } finally {
      setLoading(false)
    }
  }

  if (error) {
    return <div className="container mx-auto py-6 text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto py-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Edit Kamar</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Nama Kamar</label>
                <Input value={nama} onChange={e => setNama(e.target.value)} required />
              </div>
              <div>
                <label className="block mb-1 font-medium">Nomor Kamar</label>
                <Input value={nomorKamar} onChange={e => setNomorKamar(e.target.value)} placeholder="Contoh: 101, 202, dll" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Hotel</label>
                <ShadcnSelect value={hotelId} onValueChange={setHotelId}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih hotel" />
                  </SelectTrigger>
                  <SelectContent>
                    {hotels.map(h => (
                      <SelectItem key={h.id} value={h.id}>{h.nama}</SelectItem>
                    ))}
                  </SelectContent>
                </ShadcnSelect>
              </div>
              <div>
                <label className="block mb-1 font-medium">Tipe</label>
                <Input value={tipe} onChange={e => setTipe(e.target.value)} required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Harga</label>
                <Input type="number" value={harga} onChange={e => setHarga(Number(e.target.value))} required />
              </div>
              <div>
                <label className="block mb-1 font-medium">Kapasitas</label>
                <Input type="number" value={kapasitas} onChange={e => setKapasitas(Number(e.target.value))} required />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Status</label>
              <ShadcnSelect value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TERSEDIA">Tersedia</SelectItem>
                  <SelectItem value="TERISI">Terisi</SelectItem>
                  <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
                </SelectContent>
              </ShadcnSelect>
            </div>
            <div>
              <label className="block mb-1 font-medium">Fasilitas</label>
              <div className="flex flex-wrap gap-2">
                {fasilitasList.map(f => (
                  <button
                    type="button"
                    key={f.id}
                    className={
                      `flex items-center gap-2 px-4 py-1 rounded-full border shadow-sm font-medium transition-all duration-200
                      ${selectedFasilitas.includes(f.id)
                        ? 'bg-primary text-white border-primary scale-105 hover:bg-green-600/90'
                        : 'bg-muted border-gray-300 text-foreground hover:bg-primary/10 hover:border-primary'}`
                    }
                    onClick={() => {
                      setSelectedFasilitas(selectedFasilitas.includes(f.id)
                        ? selectedFasilitas.filter(id => id !== f.id)
                        : [...selectedFasilitas, f.id]
                      )
                    }}
                  >
                    {f.ikon && <span className="text-lg">{f.ikon}</span>}
                    {f.nama}
                    {selectedFasilitas.includes(f.id) && (
                      <span className="ml-1 text-green-300">✔</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">
                Gambar Kamar <span className="text-sm text-muted-foreground">(Maksimal {MAX_IMAGES} gambar)</span>
              </label>
              <div {...getRootProps()} className={"border-2 border-dashed rounded p-4 text-center cursor-pointer bg-muted "+(isDragActive?"border-primary bg-primary/10":"") }>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Lepaskan gambar di sini ...</p>
                ) : (
                  <p>Drag & drop gambar di sini, atau klik untuk memilih file</p>
                )}
                {imageError && (
                  <p className="text-red-500 text-sm mt-2">{imageError}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  {gambarLama.map((url, idx) => (
                    <div key={"lama-"+idx} className="relative group">
                      <Image 
                        src={url} 
                        alt="preview" 
                        width={80} 
                        height={80} 
                        className="rounded object-cover" 
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          removeImage(idx, false)
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ))}
                  {images.map((file, idx) => (
                    <div key={"baru-"+idx} className="relative group">
                      <Image 
                        src={URL.createObjectURL(file)} 
                        alt="preview" 
                        width={80} 
                        height={80} 
                        className="rounded object-cover" 
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          removeImage(idx, true)
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-4 border-t mt-2">
              <Button asChild variant="outline">
                <Link href="/dashboard-admin-secure/kamar">Batal</Link>
              </Button>
              <Button type="submit" disabled={loading}>{loading ? "Menyimpan..." : "Simpan"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 