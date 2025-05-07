"use client"

import { usePathname } from "next/navigation"
import Header from "./Header"
import Footer from "./Footer"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith('/dashboard-admin-secure')

  return (
    <>
      {!isAdminPage && <Header />}
      {children}
      {!isAdminPage && <Footer />}
    </>
  )
} 