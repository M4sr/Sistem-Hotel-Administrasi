"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { PERMISSIONS } from "@/lib/roles"
import { prisma } from "@/lib/prisma"

interface Role {
  id: string
  name: string
  description: string | null
  permissions: {
    name: string
    description: string | null
  }[]
  _count: {
    users: number
  }
}

export default function RolesPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [roles, setRoles] = useState<Role[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchRoles()
  }, [])

  async function fetchRoles() {
    try {
      const response = await fetch("/api/roles")
      const data = await response.json()
      setRoles(data)
    } catch (error) {
      console.error("Error fetching roles:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manajemen Peran</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Tambah Peran Baru</DialogTitle>
              <DialogDescription>
                Buat peran baru dan tentukan izin yang dimiliki.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nama Peran</label>
                <Input placeholder="Masukkan nama peran" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Deskripsi</label>
                <Input placeholder="Masukkan deskripsi peran" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Izin</label>
                <div className="space-y-2">
                  {Object.entries(PERMISSIONS).map(([module, permissions]) => (
                    <div key={module} className="space-y-2">
                      <h4 className="font-medium">{module}</h4>
                      {Object.entries(permissions).map(([action, permission]) => (
                        <div key={permission} className="flex items-center space-x-2">
                          <input type="checkbox" id={permission} />
                          <label htmlFor={permission}>{action}</label>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Batal
              </Button>
              <Button>Simpan</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-2">
        <Input
          placeholder="Cari peran..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama Peran</TableHead>
              <TableHead>Deskripsi</TableHead>
              <TableHead>Jumlah Pengguna</TableHead>
              <TableHead>Izin</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Memuat data...
                </TableCell>
              </TableRow>
            ) : filteredRoles.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Tidak ada data peran
                </TableCell>
              </TableRow>
            ) : (
              filteredRoles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell className="font-medium">{role.name}</TableCell>
                  <TableCell>{role.description}</TableCell>
                  <TableCell>{role._count?.users || 0}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {role.permissions?.map((permission) => (
                        <span
                          key={permission.name}
                          className="rounded-full bg-secondary px-2 py-1 text-xs"
                        >
                          {permission.name}
                        </span>
                      )) || null}
                    </div>
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