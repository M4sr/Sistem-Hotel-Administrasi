"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Edit, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Fasilitas } from "../page"
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<Fasilitas>[] = [
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
    header: "Nama Fasilitas",
  },
  {
    accessorKey: "ikon",
    header: "Ikon",
    cell: ({ row }) =>
      row.original.ikon ? (
        <img
          src={row.original.ikon}
          alt={row.original.nama}
          className="h-10 w-10 object-contain mx-auto"
        />
      ) : (
        <span>-</span>
      ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row, table }) => {
      const fasilitas = row.original
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
                const meta = table.options.meta as { onEdit: (fasilitas: Fasilitas) => void }
                meta.onEdit(fasilitas)
              }}
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit Fasilitas
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive"
              onClick={() => {
                const meta = table.options.meta as { onDelete: (fasilitas: Fasilitas) => void }
                meta.onDelete(fasilitas)
              }}
            >
              <Trash className="mr-2 h-4 w-4" />
              Hapus Fasilitas
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
] 