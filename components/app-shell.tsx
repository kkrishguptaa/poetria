import Link from "next/link";
import { PoetriaLogo } from "./poetria-logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./ui/sidebar";
import { Bell, Home, Search, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { db } from "@/lib/db";
import React, {
  ReactElement,
  isValidElement,
  cloneElement,
  ReactNode,
} from "react";

const sidebarMenuItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Search",
    href: "/search",
    icon: Search,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
];

export interface AppPageProps {
  session: {
    user: NonNullable<Awaited<ReturnType<typeof db.query.users.findFirst>>>;
  };
}

export interface AppShellProps {
  children?: ReactNode;
  session: {
    user: NonNullable<Awaited<ReturnType<typeof db.query.users.findFirst>>>;
  };
}

export function AppShell(props: AppShellProps) {
  const user = props.session.user!;

  return (
    <SidebarProvider open={false}>
      <aside>
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <SidebarMenu className="hidden md:block">
              <Link href="/" className="w-full">
                <SidebarMenuItem title="Poetria">
                  <SidebarMenuButton>
                    <PoetriaLogo />
                    <span>Poetria</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                {sidebarMenuItems.map((item) => (
                  <Link
                    key={encodeURIComponent(item.title.toLowerCase())}
                    href={item.href}
                    className="w-full"
                  >
                    <SidebarMenuItem title={item.title}>
                      <SidebarMenuButton>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </Link>
                ))}
                <Link href="/settings" className="w-full md:hidden">
                  <SidebarMenuItem title="Settings">
                    <SidebarMenuButton>
                      <Settings />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </Link>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu className="hidden md:block">
              <Link href="/settings" className="w-full">
                <SidebarMenuItem title="Settings">
                  <SidebarMenuButton>
                    <Settings />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
              <Link href={`/@${user.username!}`} className="w-full">
                <SidebarMenuItem title={user.name!}>
                  <SidebarMenuButton>
                    <Avatar className="size-4">
                      <AvatarImage
                        src={
                          user.image ??
                          `https://api.dicebear.com/9.x/glass/svg?seed=${encodeURIComponent(
                            user.name!
                          )!}`
                        }
                        className="size-4"
                      />
                      <AvatarFallback className="text-xs">
                        {user
                          .name!.split(" ")
                          .map((n) => n.slice(0, 1))
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>{user.name!}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      </aside>
      <SidebarInset>
        {isValidElement(props.children)
          ? cloneElement(
              props.children as ReactElement<{
                session: AppShellProps["session"];
              }>,
              { session: props.session }
            )
          : props.children}
      </SidebarInset>
    </SidebarProvider>
  );
}
