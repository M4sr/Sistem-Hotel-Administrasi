"use client"

import { ColumnDef } from "@tanstack/react-table"
export const dynamic = "force-dynamic";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Pencil, Trash2, MoreHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type User = {
  id: string
  name: string | null
  email: string | null
  telepon: string | null
  createdAt: string
  image: string | null
  role: {
    name: string
    permissions: {
      name: string
    }[]
  } | null
}

export const columns: ColumnDef<User>[] = [
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
    accessorKey: "image",
    header: "Foto",
    cell: ({ row }) => {
      const user = row.original
      return (
        <Avatar>
          <AvatarImage 
            src={user.image || ""} 
            alt={user.name || "User"} 
          />
          <AvatarFallback>
            {user.name?.charAt(0).toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
      )
    },
  },
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role.name",
    header: "Role",
    cell: ({ row }) => {
      return (
        <Badge variant="outline">
          {row.original.role?.name || "-"}
        </Badge>
      )
    },
  },
  {
    accessorKey: "telepon",
    header: "Telepon",
    cell: ({ row }) => row.original.telepon || "-",
  },
  {
    accessorKey: "createdAt",
    header: "Terdaftar",
    cell: ({ row }) => {
      return format(new Date(row.original.createdAt), "dd MMMM yyyy", { locale: id })
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const router = useRouter()
      const user = row.original

      const handleEdit = () => {
        router.push(`/dashboard-admin-secure/users/edit/${user.id}`)
      }

      const handleDelete = async () => {
        if (!confirm("Apakah Anda yakin ingin menghapus pengguna ini?")) return

        try {
          const response = await fetch(`/api/users/${user.id}`, {
            method: "DELETE",
          })

          if (!response.ok) throw new Error("Failed to delete user")

          router.refresh()
        } catch (error) {
          console.error("Error deleting user:", error)
          alert("Gagal menghapus pengguna")
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
            <DropdownMenuItem onClick={handleEdit}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" />
              Hapus
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
] 