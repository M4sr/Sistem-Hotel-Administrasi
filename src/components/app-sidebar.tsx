"use client"

import * as React from "react"
import {
  Building2,
  Hotel,
  BookOpen,
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

import { NavMainGrouped } from "@/components/nav-main-grouped"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { sidebarData } from "./config/sidebar-data"
import { checkMenuAccess } from "@/lib/roles"
import { useSession } from "next-auth/react"

const sidebarStyle = {
  "--sidebar-width": "16rem",
  "--sidebar-width-icon": "3rem",
} as React.CSSProperties

const LoadingSidebar = () => (
  <Sidebar 
    className="group peer text-sidebar-foreground hidden md:block"
    data-state="expanded"
    data-collapsible=""
    data-variant="sidebar"
    data-side="left"
    data-slot="sidebar"
    style={sidebarStyle}
    collapsible="icon"
  >
    <SidebarHeader>
      <div className="h-8 w-8 animate-pulse rounded-md bg-muted" />
    </SidebarHeader>
    <SidebarContent>
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-8 w-full animate-pulse rounded-md bg-muted" />
        ))}
      </div>
    </SidebarContent>
    <SidebarFooter>
      <div className="h-8 w-full animate-pulse rounded-md bg-muted" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
)

export function AppSidebar() {
  const { data: session, status } = useSession()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Filter menu berdasarkan permissions
  const filteredNavGroups = React.useMemo(() => {
    if (!session?.user?.permissions) return []
    
    const userPermissions = session.user.permissions as string[]
    
    return sidebarData.navGroups.map(group => ({
      ...group,
      items: group.items.filter(item => {
        // Check parent menu permissions
        const hasParentAccess = checkMenuAccess(userPermissions, item.permissions || [])
        
        // Filter sub-items jika ada
        const filteredSubItems = item.items?.filter(subItem => 
            checkMenuAccess(userPermissions, subItem.permissions || [])
        ) || []
        
        // Update item dengan sub-items yang sudah difilter
        if (filteredSubItems.length > 0) {
          item.items = filteredSubItems
        }
        
        // Tampilkan menu jika punya akses parent atau punya sub-items yang bisa diakses
        return hasParentAccess || filteredSubItems.length > 0
      })
    })).filter(group => group.items.length > 0)
  }, [session?.user?.permissions])

  // Tampilkan loading state yang konsisten
  if (!mounted || status === "loading") {
    return <LoadingSidebar />
  }

  // Jika tidak ada session, tampilkan sidebar kosong
  if (!session?.user) {
    return null
  }

  return (
    <Sidebar 
      className="group peer text-sidebar-foreground hidden md:block"
      data-state="expanded"
      data-collapsible=""
      data-variant="sidebar"
      data-side="left"
      data-slot="sidebar"
      style={sidebarStyle}
      collapsible="icon"
    >
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMainGrouped groups={filteredNavGroups} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser 
          user={{
            name: session.user.name || "User",
            email: session.user.email || "",
            avatar: session.user.image || ""
          }} 
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
