import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

// URL unik untuk admin dashboard
const ADMIN_PREFIX = "/dashboard-admin-secure"
const ADMIN_LOGIN = `${ADMIN_PREFIX}/login`

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAdmin = token?.peran === "ADMIN"
    const isStaff = token?.peran === "STAFF"
    const hasAdminRole = token?.role === "Admin"
    const isAdminRoute = req.nextUrl.pathname.startsWith(ADMIN_PREFIX)
    const isAdminLoginPage = req.nextUrl.pathname === ADMIN_LOGIN

    console.log("Middleware check:", {
      path: req.nextUrl.pathname,
      isAdmin,
      isStaff,
      hasAdminRole,
      isAdminRoute,
      isAdminLoginPage,
      token: {
        peran: token?.peran,
        role: token?.role
      }
    })

    // Jika sudah login sebagai admin/staff dan mencoba akses halaman login,
    // redirect ke dashboard
    if (isAdminLoginPage && (isAdmin || isStaff || hasAdminRole)) {
      console.log("Already logged in, redirecting to dashboard")
      return NextResponse.redirect(new URL(ADMIN_PREFIX, req.url))
    }

    // Izinkan akses ke halaman login admin
    if (isAdminLoginPage) {
      console.log("Allowing access to login page")
      return NextResponse.next()
    }

    // Jika mencoba mengakses rute admin tapi bukan admin/staff, redirect ke login
    if (isAdminRoute && !(isAdmin || isStaff || hasAdminRole)) {
      console.log("Access denied, redirecting to login")
      return NextResponse.redirect(new URL(ADMIN_LOGIN, req.url))
    }

    console.log("Access granted")
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname
        console.log("Authorization check for path:", path)

        // Izinkan akses ke halaman login admin tanpa autentikasi
        if (path === ADMIN_LOGIN) {
          console.log("Login page - no auth required")
          return true
        }

        // Untuk rute admin lainnya, perlu token dan hak akses admin/staff
        if (path.startsWith(ADMIN_PREFIX)) {
          const hasAccess = !!token && (token.peran === "ADMIN" || token.peran === "STAFF" || token.role === "Admin")
          console.log("Admin route check:", { 
            hasAccess, 
            tokenExists: !!token, 
            peran: token?.peran, 
            role: token?.role 
          })
          return hasAccess
        }

        // Rute non-admin tidak perlu autentikasi
        console.log("Non-admin route - no auth required")
        return true
      }
    }
  }
)

// Konfigurasi rute yang dilindungi
export const config = {
  matcher: [
    '/dashboard-admin-secure/:path*'
  ]
} 