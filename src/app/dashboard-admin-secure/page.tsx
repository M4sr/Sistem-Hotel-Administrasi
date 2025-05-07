"use client"

import { useEffect, useState } from "react"
export const dynamic = "force-dynamic";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Building2Icon, CalendarIcon, UsersIcon, DollarSignIcon, TrendingUpIcon, StarIcon, BedDoubleIcon, ClockIcon } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { getDashboardStats, getBookingStats, getPopularHotels, getRecentBookings } from "@/services/dashboard"
import { formatCurrency } from "@/lib/utils"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null)
  const [bookingStats, setBookingStats] = useState<any>(null)
  const [popularHotels, setPopularHotels] = useState<any[]>([])
  const [recentBookings, setRecentBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, bookingStatsData, popularHotelsData, recentBookingsData] = await Promise.all([
          getDashboardStats(),
          getBookingStats(),
          getPopularHotels(),
          getRecentBookings()
        ])

        setStats(statsData)
        setBookingStats(bookingStatsData)
        setPopularHotels(popularHotelsData)
        setRecentBookings(recentBookingsData)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                <div className="h-4 w-4 animate-pulse rounded bg-muted" />
              </CardHeader>
              <CardContent>
                <div className="h-8 w-16 animate-pulse rounded bg-muted" />
                <div className="mt-2 h-4 w-24 animate-pulse rounded bg-muted" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  const chartData = {
    labels: bookingStats?.labels || [],
    datasets: [
      {
        label: 'Pemesanan',
        data: bookingStats?.data || [],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        tension: 0.4
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }

  return (
    <div className="space-y-6">
      {/* Statistik Utama */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hotel</CardTitle>
            <Building2Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalHotels}</div>
            <p className="text-xs text-muted-foreground">
              +{stats?.stats.hotelsGrowth} dari bulan lalu
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pemesanan Aktif</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.activeBookings}</div>
            <p className="text-xs text-muted-foreground">
              +{stats?.stats.bookingsGrowth}% dari minggu lalu
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pengguna</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              +{stats?.stats.usersGrowth} pengguna baru
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendapatan Bulan Ini</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats?.monthlyRevenue)}</div>
            <p className="text-xs text-muted-foreground">
              +{stats?.stats.revenueGrowth}% dari bulan lalu
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Grafik dan Statistik Detail */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Statistik Pemesanan</CardTitle>
            <CardDescription>Grafik pemesanan 6 bulan terakhir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Pendapatan Bulan Ini</CardTitle>
            <CardDescription>Target: Rp 30M</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Progress</div>
                <div className="text-sm font-medium">
                  {Math.round((stats?.monthlyRevenue / 30000000) * 100)}%
                </div>
              </div>
              <Progress 
                value={(stats?.monthlyRevenue / 30000000) * 100} 
                className="h-2" 
              />
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUpIcon className="h-4 w-4 text-green-500" />
                    <span>Pendapatan</span>
                  </div>
                  <span className="font-medium">{formatCurrency(stats?.monthlyRevenue)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <UsersIcon className="h-4 w-4 text-blue-500" />
                    <span>Pengguna Aktif</span>
                  </div>
                  <span className="font-medium">{stats?.totalUsers}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hotel Terpopuler dan Pemesanan Terbaru */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Hotel Terpopuler</CardTitle>
            <CardDescription>Berdasarkan jumlah pemesanan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {popularHotels.map((hotel) => (
                <div key={hotel.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted">
                      {hotel.image && (
                        <img
                          src={hotel.image}
                          alt={hotel.name}
                          className="h-full w-full rounded-full object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{hotel.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {hotel.bookings} pemesanan
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">
                    <StarIcon className="mr-1 h-3 w-3" />
                    {hotel.rating.toFixed(1)}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pemesanan Terbaru</CardTitle>
            <CardDescription>5 pemesanan terakhir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted">
                      {booking.hotelImage && (
                        <img
                          src={booking.hotelImage}
                          alt={booking.hotelName}
                          className="h-full w-full rounded-full object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">Pemesanan #{booking.id}</div>
                      <div className="text-sm text-muted-foreground">
                        {booking.hotelName} • {booking.duration} malam
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">
                    <ClockIcon className="mr-1 h-3 w-3" />
                    {new Date(booking.createdAt).toLocaleTimeString('id-ID', {
                      hour: 'numeric',
                      minute: 'numeric'
                    })}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 