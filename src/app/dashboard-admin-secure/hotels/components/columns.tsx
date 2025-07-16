"use client"

import { ColumnDef } from "@tanstack/react-table"
export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown, Edit, MoreHorizontal, Trash, AlertTriangle } from "lucide-react"
import { Hotel } from "../page"
import { format } from "date-fns"
import { id } from "date-fns/locale"
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
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

const formatDate = (date: string) => {
  try {
    return format(new Date(date), "dd MMM yyyy")
  } catch (error) {
    return "-"
  }
}

export const columns: ColumnDef<Hotel>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Pilih semua"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Pilih baris"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nama",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Hotel
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "alamat",
    header: "Alamat",
  },
  {
    accessorKey: "kota",
    header: "Kota",
  },
  {
    accessorKey: "negara",
    header: "Negara",
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => {
      const rating = row.getValue("rating") as number
      return rating ? `${rating.toFixed(1)} / 5` : "-"
    }
  },
  {
    accessorKey: "createdAt",
    header: "Tanggal Dibuat",
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as string
      return formatDate(date)
    }
  },
  {
    accessorKey: "updatedAt",
    header: "Terakhir Diupdate",
    cell: ({ row }) => {
      const date = row.getValue("updatedAt") as string
      return formatDate(date)
    }
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row, table }) => {
      const hotel = row.original
      const [isDeleting, setIsDeleting] = useState(false)
      const [showDeleteDialog, setShowDeleteDialog] = useState(false)
      const { toast } = useToast()

      const handleDelete = async () => {
        try {
          setIsDeleting(true)
          console.log("[HOTEL_DELETE] Mencoba menghapus hotel:", hotel.id)
          
          const response = await fetch(`/api/hotels/${hotel.id}`, {
            method: "DELETE",
            cache: "no-store",
          })

          const data = await response.json()

          if (!response.ok) {
            throw new Error(data.error || "Gagal menghapus hotel")
          }

          console.log("[HOTEL_DELETE] Hotel berhasil dihapus")
          
          // Revalidate dan refresh data
          await fetch("/api/revalidate?path=/dashboard-admin-secure/hotels", {
            method: "POST",
          })
          
          toast({
            title: "Berhasil",
            description: "Hotel berhasil dihapus",
            variant: "default",
          })

          const meta = table.options.meta as { onDelete: () => void }
          if (meta.onDelete) {
            meta.onDelete()
          }
        } catch (error: any) {
          console.error("[HOTEL_DELETE] Error:", error)
          toast({
            title: "Gagal",
            description: error.message || "Gagal menghapus hotel",
            variant: "destructive",
          })
        } finally {
          setIsDeleting(false)
          setShowDeleteDialog(false)
        }
      }

      return (
        <>
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
                  const meta = table.options.meta as { onEdit: (hotel: Hotel) => void }
                  meta.onEdit(hotel)
                }}
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit Hotel
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive"
                onClick={() => setShowDeleteDialog(true)}
              >
                <Trash className="mr-2 h-4 w-4" />
                Hapus Hotel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="h-5 w-5" />
                  Konfirmasi Hapus
                </DialogTitle>
                <DialogDescription>
                  Apakah Anda yakin ingin menghapus hotel <span className="font-semibold">{hotel.nama}</span>? 
                  Tindakan ini tidak dapat dibatalkan.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setShowDeleteDialog(false)}
                  disabled={isDeleting}
                >
                  Batal
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={isDeleting}
                >
                  {isDeleting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Menghapus...
                    </>
                  ) : (
                    "Hapus"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )
    }
  }
] 