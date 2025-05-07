"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import Link from "next/link"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  defaultOpen?: boolean
  items?: {
    title: string
    url: string
    isActive?: boolean
  }[]
}

interface NavGroup {
  label: string
  items: NavItem[]
}

export function NavMainGrouped({
  groups,
}: {
  groups: NavGroup[]
}) {
  return (
    <>
      {groups.map((group) => (
        <SidebarGroup key={group.label}>
          <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          <SidebarMenu>
            {group.items.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.defaultOpen}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton 
                      tooltip={item.title}
                      isActive={item.isActive}
                      className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      {item.icon && <item.icon className={item.isActive ? "text-primary" : ""} />}
                      <span className={item.isActive ? "font-medium" : ""}>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton 
                            asChild
                            isActive={subItem.isActive}
                            className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                          >
                            <Link href={subItem.url}>
                              <span className={subItem.isActive ? "font-medium" : ""}>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  )
} 