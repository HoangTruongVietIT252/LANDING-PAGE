"use client";
import type React from "react";
import { cn } from "@/lib/utils";
import { DashboardHeader } from "./components/Header";
import { DashboardSidebar } from "./components/Sidebar";
import { useSidebar } from "@/providers/SidebarProvider";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { sidebarOpen } = useSidebar();
  return (
    <div className="component:DashboardLayout flex min-h-screen w-full">
      <DashboardSidebar />
      <div
        className={cn(
          "flex-1 min-h-screen transition-all duration-300 ease-in-out",
          sidebarOpen ? "md:pl-64" : "md:pl-0"
        )}
      >
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}
