"use client"

import { ColumnDef } from "@tanstack/react-table"
export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown, Edit, MoreHorizontal, Trash } from "lucide-react"
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

      const handleDelete = async () => {
        if (!confirm("Apakah Anda yakin ingin menghapus hotel ini?")) return
        
        try {
          const response = await fetch(`/api/hotels/${hotel.id}`, {
            method: "DELETE",
          })

          if (!response.ok) throw new Error("Failed to delete hotel")

          const meta = table.options.meta as { onDelete: () => void }
          if (meta.onDelete) {
            meta.onDelete()
          }
        } catch (error) {
          console.error("Error deleting hotel:", error)
          alert("Gagal menghapus hotel")
        }
      }

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
              onClick={handleDelete}
            >
              <Trash className="mr-2 h-4 w-4" />
              Hapus Hotel
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
] 