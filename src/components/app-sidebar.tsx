import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import SidebarMenuRecursive from "@/components/SidebarMenuRecursive";

const data = {
  navMain: [
    {
      title: "All it takes is to",
      url: "#all-it-takes-is-to",
      items: [
        { title: "Clone repository", url: "#clone-repository" },
        { title: "Run docker compose", url: "#docker-compose" },
        { title: "Open app in browser", url: "#open-app" },
      ],
    },
    {
      title: "Introduction",
      url: "#introduction",
      items: [
        {
          title: "Landing page",
          url: "#landing-page",
        },
        { 
          title: "Logs page",
          url: "#logs-page" },
        {
          title: "Logs operations",
          url: "#logs-operations",
          items: [
            { title: "Imperative mining", url: "#imperative-mining" },
            { title: "Declarative discovery", url: "#declarative-discovery" },
          ],
        },
        {
          title: "Optimal Alignment Check",
          url: "#optimal-alignment-check",
          items: [],
        },
        {
          title: "DECLARE Conformance Check",
          url: "#declare-conformance-check",
          items: [],
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#heading">
                <div className="bg-tertiary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">ProcessM.NET App</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuRecursive items={data.navMain} />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
