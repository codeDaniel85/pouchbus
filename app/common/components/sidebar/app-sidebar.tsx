import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Computer,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  User,
  Bus,
  Building,
} from "lucide-react"

import { NavMain } from "~/common/components/sidebar/nav-main"
import { NavProjects } from "~/common/components/sidebar/nav-projects"
import { NavUser } from "~/common/components/sidebar/nav-user"
import { TeamSwitcher } from "~/common/components/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/common/components/ui/sidebar"
import { Header } from "~/common/header"

// This is sample data.
const data = {
  user: {
    name: "Daniel",
    email: "code.daniel85@gmail.com",
    avatar: "/user1.png",
  },
  teams: [
    {
      name: "Pouch Bus",
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Users",
      url: "#",
      icon: User,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Search",
          url: "#",
        },
        {
          title: "Company",
          url: "#",
        },
        {
          title: "Bus Stop",
          url: "#",
        },
        {
          title: "Routes",
          url: "#",
        },
        {
          title: "# Requests",
          url: "#",
        },
      ],
    },
    {
      title: "Bus Drivers",
      url: "#",
      icon: Bus,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Vehicle",
          url: "#",
        },
        {
          title: "Drive",
          url: "#",
        },
        {
          title: "# User Requests",
          url: "#",
        },
      ],
    },
    {
      title: "Company Admin",
      url: "#",
      icon: Building,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Users",
          url: "#",
        },
        {
          title: "Vehicle",
          url: "#",
        },
        {
          title: "Drivers",
          url: "#",
        },
        {
          title: "Routes & Bus Stop",
          url: "#",
        },
        {
          title: "# User Requests",
          url: "#",
        },
      ],
    },
    {
      title: "System Admin",
      url: "#",
      icon: Computer,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Users",
          url: "#",
        },
        {
          title: "Company",
          url: "#",
        },
        {
          title: "Routes & Bus Stop",
          url: "#",
        },
        {
          title: "Vehicle",
          url: "#",
        },
        {
          title: "# All Requests",
          url: "#",
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
      </SidebarHeader> */}
      <Header />
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
