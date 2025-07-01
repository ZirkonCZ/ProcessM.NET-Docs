import {
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub
} from "@/components/ui/sidebar"

export default function SidebarMenuRecursive({ items }: { items: any[] }) {
  return (
    <SidebarMenu className="gap-2">
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <a href={item.url} className="font-medium">
              {item.title}
            </a>
          </SidebarMenuButton>
          {item.items && item.items.length > 0 && (
            <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
              <SidebarMenuRecursive items={item.items} />
            </SidebarMenuSub>
          )}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}