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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Introduction",
      url: "#introduction",
      items: [
        {
          title: "Overview",
          url: "#overview",
        },
      ],
    },
    {
      title: "Process Mining Concepts",
      url: "#process-mining-concepts",
      items: [
        {
          title: "Process",
          url: "#process",
        },
        {
          title: "Event Log",
          url: "#event-log",
        },
        {
          title: "Process Models",
          url: "#process-models",
        },
      ],
    },
    {
      title: "Basic Process Mining Techniques",
      url: "#basic-process-mining-techniques",
      items: [
        {
          title: "Process Discovery",
          url: "#process-discovery",
        },
        {
          title: "Conformance Checking",
          url: "#conformance-checking",
        },
        {
          title: "Process Enhancement",
          url: "#process-enhancement",
        },
      ],
    },
    {
      title: "Process Model Representation",
      url: "#process-model-representation",
      items: [
        {
          title: "Petri Nets",
          url: "#petri-nets",
        },
        {
          title: "Directly-Follows Graphs",
          url: "#directly-follows-graphs",
        },
      ],
    },
    {
      title: "Imperative Process Mining",
      url: "#imperative-process-mining",
      items: [
        {
          title: "Alpha Algorithm",
          url: "#alpha-algorithm",
        },
        {
          title: "Heuristic Miner",
          url: "#heuristic-miner",
        },
        {
          title: "Optimal Alignments",
          url: "#optimal-alignments",
        },
      ],
    },
    {
      title: "Declarative Process Mining",
      url: "#declarative-process-mining",
      items: [
        {
          title: "DECLARE Language",
          url: "#declare-language",
        },
        {
          title: "Templates",
          url: "#templates",
        },
        {
          title: "Discovery",
          url: "#discovery",
        },
        {
          title: "Conformance Checking",
          url: "#declarative-conformance-checking",
        },
      ],
    },
  ],
}

export function DocsSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-tertiary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">ProcessM.NET</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
