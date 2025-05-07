"use client"

import { useEffect, useState } from "react"
export const dynamic = "force-dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CreditCard, History, Clock } from "lucide-react"
import Link from "next/link"

export default function PaymentsPage() {
  const [payments, setPayments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/payments")
      .then(res => res.json())
      .then(data => {
        setPayments(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const totalPembayaran = payments.reduce((sum, p) => sum + (p.jumlah || 0), 0)
  const jumlahPending = payments.filter(p => p.status === "PENDING").length
  const jumlahSelesai = payments.filter(p => p.status === "DIBAYAR").length

  return (
    <div className="container mx-auto py-6">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Manajemen Pembayaran</h1>
            <p className="text-muted-foreground">Kelola semua pembayaran booking hotel</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Pembayaran</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loading ? '...' : `Rp ${totalPembayaran.toLocaleString()}`}</div>
              <p className="text-xs text-muted-foreground">+0% dari bulan lalu</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pembayaran Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loading ? '...' : jumlahPending}</div>
              <p className="text-xs text-muted-foreground">Menunggu konfirmasi</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pembayaran Selesai</CardTitle>
              <History className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loading ? '...' : jumlahSelesai}</div>
              <p className="text-xs text-muted-foreground">Total pembayaran yang sudah dikonfirmasi</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Pembayaran Pending</CardTitle>
              <CardDescription>Kelola pembayaran yang menunggu konfirmasi</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard-admin-secure/payments/pending">
                <Button className="w-full">
                  Lihat Pembayaran Pending
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Riwayat Pembayaran</CardTitle>
              <CardDescription>Lihat semua riwayat pembayaran</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard-admin-secure/payments/history">
                <Button className="w-full">
                  Lihat Riwayat Pembayaran
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 