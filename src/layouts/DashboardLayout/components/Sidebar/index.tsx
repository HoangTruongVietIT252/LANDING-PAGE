"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/providers/SidebarProvider";
import { Button } from "@/components/ui/button";
import CommonIcons from "@/components/CommonIcons";

const sidebarItems = [
  {
    title: "Home",
    icon: <CommonIcons.Home />,
    isActive: true,
  },
  {
    title: "Apps",
    icon: <CommonIcons.Grid />,
    badge: "2",
    items: [
      { title: "All Apps", url: "#" },
      { title: "Recent", url: "#" },
      { title: "Updates", url: "#", badge: "2" },
      { title: "Installed", url: "#" },
    ],
  },
  {
    title: "Files",
    icon: <CommonIcons.FileText />,
    items: [
      { title: "Recent", url: "#" },
      { title: "Shared with me", url: "#", badge: "3" },
      { title: "Favorites", url: "#" },
      { title: "Trash", url: "#" },
    ],
  },
  {
    title: "Projects",
    icon: <CommonIcons.Layers />,
    badge: "4",
    items: [
      { title: "Active Projects", url: "#", badge: "4" },
      { title: "Archived", url: "#" },
      { title: "Templates", url: "#" },
    ],
  },
  {
    title: "Learn",
    icon: <CommonIcons.BookOpen />,
    items: [
      { title: "Tutorials", url: "#" },
      { title: "Courses", url: "#" },
      { title: "Webinars", url: "#" },
      { title: "Resources", url: "#" },
    ],
  },
  {
    title: "Community",
    icon: <CommonIcons.Users />,
    items: [
      { title: "Explore", url: "#" },
      { title: "Following", url: "#" },
      { title: "Challenges", url: "#" },
      { title: "Events", url: "#" },
    ],
  },
  {
    title: "Resources",
    icon: <CommonIcons.Bookmark />,
    items: [
      { title: "Stock Photos", url: "#" },
      { title: "Fonts", url: "#" },
      { title: "Icons", url: "#" },
      { title: "Templates", url: "#" },
    ],
  },
];
export function DashboardSidebar() {
  const { sidebarOpen, mobileMenuOpen, setMobileMenuOpen } = useSidebar();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };
  return (
    <div>
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-background transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col border-r">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <CommonIcons.Wand2 className="size-5" />
              </div>
              <div>
                <h2 className="font-semibold">Designali</h2>
                <p className="text-xs text-muted-foreground">Creative Suite</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <CommonIcons.X className="h-5 w-5" />
            </Button>
          </div>

          <div className="px-3 py-2">
            <div className="relative">
              <CommonIcons.Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-2xl bg-muted pl-9 pr-4 py-2"
              />
            </div>
          </div>

          <ScrollArea className="flex-1 px-3 py-2">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <div key={item.title} className="mb-1">
                  <button
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                      item.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    )}
                    onClick={() => item.items && toggleExpanded(item.title)}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    {item.badge && (
                      <Badge variant="outline" className="ml-auto rounded-full px-2 py-0.5 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                    {item.items && (
                      <CommonIcons.ChevronDown
                        className={cn(
                          "ml-2 h-4 w-4 transition-transform",
                          expandedItems[item.title] ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </button>

                  {item.items && expandedItems[item.title] && (
                    <div className="mt-1 ml-6 space-y-1 border-l pl-3">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.url}
                          className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm hover:bg-muted"
                        >
                          {subItem.title}
                          {subItem.badge && (
                            <Badge
                              variant="outline"
                              className="ml-auto rounded-full px-2 py-0.5 text-xs"
                            >
                              {subItem.badge}
                            </Badge>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="space-y-1">
              <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <CommonIcons.Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <div className="flex items-center gap-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  Pro
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden w-64 transform border-r bg-background transition-transform duration-300 ease-in-out md:block",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <CommonIcons.Wand2 className="size-5" />
              </div>
              <div>
                <h2 className="font-semibold">Admin</h2>
                <p className="text-xs text-muted-foreground">Next level</p>
              </div>
            </div>
          </div>

          <div className="px-3 py-2">
            <div className="relative">
              <CommonIcons.Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-2xl bg-muted pl-9 pr-4 py-2"
              />
            </div>
          </div>

          <ScrollArea className="flex-1 px-3 py-2">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <div key={item.title} className="mb-1">
                  <button
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                      item.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    )}
                    onClick={() => item.items && toggleExpanded(item.title)}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    {item.badge && (
                      <Badge variant="outline" className="ml-auto rounded-full px-2 py-0.5 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                    {item.items && (
                      <CommonIcons.ChevronDown
                        className={cn(
                          "ml-2 h-4 w-4 transition-transform",
                          expandedItems[item.title] ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </button>

                  {item.items && expandedItems[item.title] && (
                    <div className="mt-1 ml-6 space-y-1 border-l pl-3">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.url}
                          className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm hover:bg-muted"
                        >
                          {subItem.title}
                          {subItem.badge && (
                            <Badge
                              variant="outline"
                              className="ml-auto rounded-full px-2 py-0.5 text-xs"
                            >
                              {subItem.badge}
                            </Badge>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="space-y-1">
              <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <CommonIcons.Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <div className="flex items-center gap-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  Pro
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
