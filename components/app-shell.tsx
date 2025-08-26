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
import React, {
  ReactElement,
  isValidElement,
  cloneElement,
  ReactNode,
} from "react";
import { User } from "@/lib/utils";
import { UserAvatar } from "./user-avatar";
import { AppHeader } from "./app-header";
import { AppNavigation } from "./app-navigation";

export interface AppPageProps {
  session: {
    user: User;
  };
}

export interface AppShellProps {
  children?: ReactNode;
  session: {
    user: User;
  };
}

export interface NavigationItem {
  title: string;
  href: string;
  icon: typeof Home;
}

export function AppShell(props: AppShellProps) {
  const user = props.session.user!;

  const items = [
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
  ] as NavigationItem[];

  return (
    <SidebarProvider defaultOpen={false}>
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
                {items.map((item) => (
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
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
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
                    <UserAvatar user={user} />
                    <span>{user.name!}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      </aside>
      <SidebarInset>
        <AppHeader user={user} />
        <main>
          {isValidElement(props.children)
            ? cloneElement(
                props.children as ReactElement<{
                  session: AppShellProps["session"];
                }>,
                { session: props.session }
              )
            : props.children}
        </main>
        <AppNavigation user={user} items={items} />
      </SidebarInset>
    </SidebarProvider>
  );
}
