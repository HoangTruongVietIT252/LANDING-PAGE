import { ArrowRightIcon, CreditCard, DollarSign, Package, Users } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="h-8 w-full justify-start px-2 text-xs">
            View Report
            <ArrowRightIcon className="ml-1 h-3 w-3" />
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-muted-foreground">+180.1% from last month</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="h-8 w-full justify-start px-2 text-xs">
            View Subscriptions
            <ArrowRightIcon className="ml-1 h-3 w-3" />
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Orders</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="h-8 w-full justify-start px-2 text-xs">
            View Orders
            <ArrowRightIcon className="ml-1 h-3 w-3" />
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="h-8 w-full justify-start px-2 text-xs">
            View Users
            <ArrowRightIcon className="ml-1 h-3 w-3" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
