import { MoreHorizontal } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentOrders = [
  {
    id: "ORD001",
    customer: "John Doe",
    status: "Completed",
    date: "2023-05-15",
    total: "$250.00",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    status: "Processing",
    date: "2023-05-16",
    total: "$125.50",
  },
  {
    id: "ORD003",
    customer: "Robert Johnson",
    status: "Shipped",
    date: "2023-05-17",
    total: "$340.00",
  },
  {
    id: "ORD004",
    customer: "Emily Davis",
    status: "Pending",
    date: "2023-05-18",
    total: "$75.20",
  },
  {
    id: "ORD005",
    customer: "Michael Brown",
    status: "Completed",
    date: "2023-05-19",
    total: "$189.99",
  },
]

export function DashboardTable() {
  return (
    <Card className="col-span-1 lg:col-span-3">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>You have {recentOrders.length} orders this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                          ? "bg-blue-100 text-blue-800"
                          : order.status === "Shipped"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </div>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell className="text-right">{order.total}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View order</DropdownMenuItem>
                      <DropdownMenuItem>View customer</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit order</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
