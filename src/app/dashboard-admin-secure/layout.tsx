"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { SessionProvider } from "next-auth/react"
import { sidebarData } from "@/components/config/sidebar-data"
import { ThemeProvider } from "next-themes"

function getBreadcrumbItems(pathname: string) {
  const items = []
  const pathSegments = pathname.split('/').filter(Boolean)
  
  // Hapus dashboard-admin-secure dari path
  if (pathSegments[0] === 'dashboard-admin-secure') {
    pathSegments.shift()
  }

  let currentPath = '/dashboard-admin-secure'
  items.push({
    title: 'Admin',
    href: currentPath,
    isCurrent: pathSegments.length === 0
  })

  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === pathSegments.length - 1
    
    // Cari menu item yang sesuai
    const menuItem = findMenuItemByPath(currentPath)
    
    items.push({
      title: menuItem?.title || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: currentPath,
      isCurrent: isLast
    })
  })

  return items
}

function findMenuItemByPath(path: string) {
  for (const group of sidebarData.navGroups) {
    for (const item of group.items) {
      if (item.url === path) {
        return item
      }
      if (item.items) {
        for (const subItem of item.items) {
          if (subItem.url === path) {
            return subItem
          }
        }
      }
    }
  }
  return null
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/dashboard-admin-secure/login"
  const breadcrumbItems = getBreadcrumbItems(pathname)

  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-background">
        {children}
      </div>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <SessionProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={item.href}>
                  <BreadcrumbItem>
                        {item.isCurrent ? (
                          <BreadcrumbPage>{item.title}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
                        )}
                  </BreadcrumbItem>
                      {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <ThemeToggle />
          </header>
          <div className="flex-1 overflow-y-auto p-8">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </SessionProvider>
    </ThemeProvider>
  )
} 