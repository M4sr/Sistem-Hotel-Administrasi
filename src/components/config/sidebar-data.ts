"use client"

import {
  Building2,
  Hotel,
  Users,
  Calendar,
  CreditCard,
  Settings2,
  Star,
  BedDouble,
  LayoutDashboard,
  Image,
  Sparkles
} from "lucide-react"
import { PERMISSIONS } from "@/lib/permissions"

export const sidebarData = {
  user: {
    name: "Admin Hotel",
    email: "admin@hotel.com",
    avatar: "/avatars/admin.jpg",
  },
  teams: [
    {
      name: "Sistem Hotel",
      logo: Hotel,
      plan: "Admin",
    }
  ],
  navGroups: [
    {
      label: "Overview",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard-admin-secure",
          icon: LayoutDashboard,
          isActive: true,
          permissions: [PERMISSIONS.DASHBOARD.VIEW],
          items: [
            {
              title: "Statistik",
              url: "/dashboard-admin-secure",
              permissions: [PERMISSIONS.DASHBOARD.VIEW],
            },
            {
              title: "Laporan",
              url: "/dashboard-admin-secure/laporan",
              permissions: [PERMISSIONS.DASHBOARD.VIEW],
            }
          ],
        }
      ]
    },
    {
      label: "Manajemen Properti",
      items: [
        {
          title: "Hotel",
          url: "/dashboard-admin-secure/hotels",
          icon: Building2,
          permissions: [PERMISSIONS.HOTELS.VIEW],
          items: [
            {
              title: "Daftar Hotel",
              url: "/dashboard-admin-secure/hotels",
              permissions: [PERMISSIONS.HOTELS.VIEW],
            },
          ],
        },
        {
          title: "Kamar",
          url: "/dashboard-admin-secure/kamar",
          icon: BedDouble,
          permissions: [PERMISSIONS.ROOMS.VIEW],
          items: [
            {
              title: "Daftar Kamar",
              url: "/dashboard-admin-secure/kamar",
              permissions: [PERMISSIONS.ROOMS.VIEW],
            },
            {
              title: "Tambah Kamar",
              url: "/dashboard-admin-secure/kamar/add",
              permissions: [PERMISSIONS.ROOMS.CREATE],
            },
            {
              title: "Status Kamar",
              url: "/dashboard-admin-secure/kamar/status",
              permissions: [PERMISSIONS.ROOMS.UPDATE],
            }
          ],
        },
        {
          title: "Fasilitas",
          url: "/dashboard-admin-secure/fasilitas",
          icon: Sparkles,
          permissions: [PERMISSIONS.HOTELS.UPDATE],
          items: [
            {
              title: "Daftar Fasilitas",
              url: "/dashboard-admin-secure/fasilitas",
              permissions: [PERMISSIONS.HOTELS.VIEW],
            },
            {
              title: "Tambah Fasilitas",
              url: "/dashboard-admin-secure/fasilitas/add",
              permissions: [PERMISSIONS.HOTELS.CREATE],
            }
          ],
        }
      ]
    },
    {
      label: "Transaksi",   
      items: [
        {
          title: "Pemesanan",
          url: "/dashboard-admin-secure/bookings",
          icon: Calendar,
          permissions: [PERMISSIONS.BOOKINGS.VIEW],
          items: [
            {
              title: "Daftar Pemesanan",
              url: "/dashboard-admin-secure/bookings",
              permissions: [PERMISSIONS.BOOKINGS.VIEW],
            },
            {
              title: "Pemesanan Baru",
              url: "/dashboard-admin-secure/bookings/new",
              permissions: [PERMISSIONS.BOOKINGS.CREATE],
            },
            {
              title: "Riwayat",
              url: "/dashboard-admin-secure/bookings/history",
              permissions: [PERMISSIONS.BOOKINGS.VIEW],
            }
          ],
        },
        {
          title: "Pembayaran",
          url: "/dashboard-admin-secure/payments",
          icon: CreditCard,
          permissions: [PERMISSIONS.PAYMENTS.VIEW],
          items: [
            {
              title: "Daftar Pembayaran",
              url: "/dashboard-admin-secure/payments",
              permissions: [PERMISSIONS.PAYMENTS.VIEW],
            },
            {
              title: "Pembayaran Pending",
              url: "/dashboard-admin-secure/payments/pending",
              permissions: [PERMISSIONS.PAYMENTS.UPDATE],
            },
            {
              title: "Riwayat Pembayaran",
              url: "/dashboard-admin-secure/payments/history",
              permissions: [PERMISSIONS.PAYMENTS.VIEW],
            }
          ],
        }
      ]
    },
    {
      label: "Konten & Media",
      items: [
        {
          title: "Ulasan",
          url: "/dashboard-admin-secure/reviews",
          icon: Star,
          permissions: [PERMISSIONS.HOTELS.VIEW],
          items: [
            {
              title: "Semua Ulasan",
              url: "/dashboard-admin-secure/reviews",
              permissions: [PERMISSIONS.HOTELS.VIEW],
            },
            {
              title: "Ulasan Hotel",
              url: "/dashboard-admin-secure/reviews/hotel",
              permissions: [PERMISSIONS.HOTELS.VIEW],
            },
            {
              title: "Balasan",
              url: "/dashboard-admin-secure/reviews/balasan",
              permissions: [PERMISSIONS.HOTELS.UPDATE],
            }
          ],
        },
        {
          title: "Media",
          url: "/dashboard-admin-secure/media",
          icon: Image,
          permissions: [PERMISSIONS.HOTELS.UPDATE],
          items: [
            {
              title: "Galeri",
              url: "/dashboard-admin-secure/media/gallery",
              permissions: [PERMISSIONS.HOTELS.VIEW],
            },
            {
              title: "Upload Gambar",
              url: "/dashboard-admin-secure/media/upload",
              permissions: [PERMISSIONS.HOTELS.CREATE],
            }
          ],
        }
      ]
    },
    {
      label: "Administrasi",
      items: [
        {
          title: "Pengguna",
          url: "/dashboard-admin-secure/users",
          icon: Users,
          permissions: [PERMISSIONS.USERS.VIEW],
          items: [
            {
              title: "Daftar Pengguna",
              url: "/dashboard-admin-secure/users",
              permissions: [PERMISSIONS.USERS.VIEW],
            },
            {
              title: "Tambah Pengguna",
              url: "/dashboard-admin-secure/users/add",
              permissions: [PERMISSIONS.USERS.CREATE],
            },
            {
              title: "Peran Pengguna",
              url: "/dashboard-admin-secure/users/roles",
              permissions: [PERMISSIONS.ROLES.VIEW],
            }
          ],
        },
      ]
    }
  ]
} 