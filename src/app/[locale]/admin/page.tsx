"use client";
import { DashboardCards } from "@/components/dashboard/cards";
import { DashboardCharts } from "@/components/dashboard/charts";
import { DashboardTable } from "@/components/dashboard/table";

export default function DashboardPage() {
  return (
    <div className="component:DashboardPage flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DashboardCards />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
        <DashboardCharts />
        <DashboardTable />
      </div>
    </div>
  );
}
