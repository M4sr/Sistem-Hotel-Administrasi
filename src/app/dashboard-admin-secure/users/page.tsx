"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { columns, type User } from "./components/columns"
import { DataTable } from "./components/data-table"

export default function UsersPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users")
        if (!response.ok) throw new Error("Failed to fetch users")
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error("Error fetching users:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const handleAddUser = () => {
    router.push("/dashboard-admin-secure/users/add")
  }

  if (!session) {
    return null
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Manajemen Pengguna</CardTitle>
              <CardDescription>
                Kelola pengguna sistem hotel
              </CardDescription>
            </div>
            <Button onClick={handleAddUser}>
              <Plus className="mr-2 h-4 w-4" />
              Tambah Pengguna
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-4">Memuat data...</div>
          ) : (
            <DataTable columns={columns} data={users} />
          )}
        </CardContent>
      </Card>
    </div>
  )
} 