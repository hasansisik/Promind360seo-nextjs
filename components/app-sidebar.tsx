"use client"

import * as React from "react"
import {
  GalleryVerticalEnd,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Admin",
    email: "birimajans@gmail.com",
    avatar: "/avatars/admin.jpg",
  },
  teams: [
    {
      name: "Promind360",
      logo: GalleryVerticalEnd,
    },
  ],
  navMain: [
    {
      title: "Yönetim",
      url: "#",
      icon: Settings2,
      isActive: true,
      items: [
        {
          title: "Aramalar",
          url: "/dashboard",
        },
        {
          title: "WhatsApp",
          url: "/settings/whatsapp",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
