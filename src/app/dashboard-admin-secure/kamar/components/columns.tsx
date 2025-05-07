"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Edit, Trash, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Kamar } from "../page"
import { Checkbox } from "@/components/ui/checkbox"

// Komponen terpisah untuk dialog gambar
function ImageDialog({ kamar }: { kamar: Kamar }) {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const gambar = kamar.gambar || []

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % gambar.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + gambar.length) % gambar.length)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <ImageIcon className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <ImageIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Gambar Kamar {kamar.nama}</DialogTitle>
        </DialogHeader>
        <div className="relative">
          {gambar.length > 0 ? (
            <>
              <div className="relative aspect-video w-full">
                <Image
                  src={gambar[selectedImage].url}
                  alt={`Gambar ${selectedImage + 1}`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              {gambar.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
              <div className="flex gap-2 mt-4 justify-center">
                {gambar.map((g, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden ${
                      selectedImage === idx ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <Image
                      src={g.url}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center text-muted-foreground py-8">
              Tidak ada gambar
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export const columns: ColumnDef<Kamar>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nama",
    header: "Nama Kamar",
  },
  {
    accessorKey: "nomorKamar",
    header: "Nomor Kamar",
  },
  {
    accessorKey: "hotel",
    header: "Hotel",
    cell: ({ row }) => row.original.hotel.nama,
  },
  {
    accessorKey: "harga",
    header: "Harga",
    cell: ({ row }) => `Rp ${row.original.harga.toLocaleString()}`,
  },
  {
    accessorKey: "kapasitas",
    header: "Kapasitas",
  },
  {
    accessorKey: "tipe",
    header: "Tipe",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "fasilitas",
    header: "Fasilitas",
    cell: ({ row }) => {
      const fasilitas = row.original.hotel.fasilitas || [];
      if (fasilitas.length === 0) return <span className="text-muted-foreground">-</span>;
      return (
        <div className="flex flex-wrap gap-1">
          {fasilitas.map((f: any) => (
            <span key={f.id} className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-muted text-xs">
              {f.ikon ? (
                <img
                  src={f.ikon}
                  alt={f.nama}
                  className="h-5 w-5 object-contain"
                />
              ) : null}
              {f.nama}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "gambar",
    header: "Gambar",
    cell: ({ row }) => <ImageDialog kamar={row.original} />,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row, table }) => {
      const kamar = row.original
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
            <DropdownMenuItem
              onClick={() => {
                const meta = table.options.meta as { onEdit: (kamar: Kamar) => void }
                meta.onEdit(kamar)
              }}
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit Kamar
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive"
              onClick={() => {
                const meta = table.options.meta as { onDelete: (kamar: Kamar) => void }
                meta.onDelete(kamar)
              }}
            >
              <Trash className="mr-2 h-4 w-4" />
              Hapus Kamar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
] 