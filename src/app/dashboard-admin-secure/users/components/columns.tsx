"use client"

import { ColumnDef } from "@tanstack/react-table"
export const dynamic = "force-dynamic";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Pencil, Trash2, MoreHorizontal, AlertTriangle } from "lucide-react"
import { useRouter } from "next/navigation"
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
import React from "react"
import { useToast } from "@/components/ui/use-toast"

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
      const [isDeleting, setIsDeleting] = React.useState(false)
      const [showDeleteDialog, setShowDeleteDialog] = React.useState(false)
      const { toast } = useToast()

      const handleEdit = () => {
        router.push(`/dashboard-admin-secure/users/edit/${user.id}`)
      }

      const handleDelete = async () => {
        try {
          setIsDeleting(true)
          console.log("[USER_DELETE] Mencoba menghapus user:", user.id)
          
          const response = await fetch(`/api/users/${user.id}`, {
            method: "DELETE",
            cache: "no-store",
          })

          const data = await response.json()

          if (!response.ok) {
            throw new Error(data.error || "Failed to delete user")
          }

          console.log("[USER_DELETE] User berhasil dihapus")
          
          // Revalidate dan refresh data
          await fetch("/api/revalidate?path=/dashboard-admin-secure/users", {
            method: "POST",
          })
          
          toast({
            title: "Berhasil",
            description: "Pengguna berhasil dihapus",
            variant: "default",
          })

          // Force refresh data
          router.refresh()
          
        } catch (error: any) {
          console.error("[USER_DELETE] Error:", error)
          toast({
            title: "Gagal",
            description: error.message || "Gagal menghapus pengguna",
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
              <DropdownMenuItem onClick={handleEdit}>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={() => setShowDeleteDialog(true)}
                className="text-red-600 focus:text-red-600"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Hapus
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
                  Apakah Anda yakin ingin menghapus pengguna <span className="font-semibold">{user.name}</span>? 
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
    },
  },
] 