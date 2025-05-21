"use client"

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const data = [
  {
    name: "Jan",
    total: 1800,
    sales: 900,
  },
  {
    name: "Feb",
    total: 2200,
    sales: 1100,
  },
  {
    name: "Mar",
    total: 2800,
    sales: 1500,
  },
  {
    name: "Apr",
    total: 2600,
    sales: 1250,
  },
  {
    name: "May",
    total: 3100,
    sales: 1800,
  },
  {
    name: "Jun",
    total: 3500,
    sales: 2100,
  },
  {
    name: "Jul",
    total: 3200,
    sales: 1900,
  },
  {
    name: "Aug",
    total: 3800,
    sales: 2300,
  },
  {
    name: "Sep",
    total: 4100,
    sales: 2500,
  },
  {
    name: "Oct",
    total: 4500,
    sales: 2700,
  },
  {
    name: "Nov",
    total: 4300,
    sales: 2600,
  },
  {
    name: "Dec",
    total: 5000,
    sales: 3000,
  },
]

export function DashboardCharts() {
  return (
    <Card className="col-span-1 lg:col-span-4">
      <CardHeader>
        <CardTitle>Analytics Overview</CardTitle>
        <CardDescription>View your sales and revenue analytics over time.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#0ea5e9" strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="sales">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip />
                <Bar dataKey="sales" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
