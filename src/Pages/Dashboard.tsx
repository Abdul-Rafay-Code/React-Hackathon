import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  LineChart,
  Line,
  Tooltip,
} from "recharts";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import StarsIcon from "@mui/icons-material/Stars";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Card, CardContent, CardHeader, CardTitle } from "@mui/material";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-100">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <DashboardIcon className="h-6 w-6" />
          <span className="font-semibold text-lg">Acme Hotel</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Reservations
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Rooms
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Guests
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Staff
          </a>
        </nav>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 p-4 sm:p-6">
        <div className="grid gap-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium">Occupancy Rate</div>
                <GroupIcon className="w-5 h-5 text-gray-500" />
              </CardHeader>
              <CardContent className="text-2xl font-bold">82%</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium">Revenue</div>
                <AttachMoneyIcon className="w-5 h-5 text-gray-500" />
              </CardHeader>
              <CardContent className="text-2xl font-bold">$234,567</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium">Bookings</div>
                <EventIcon className="w-5 h-5 text-gray-500" />
              </CardHeader>
              <CardContent className="text-2xl font-bold">1,234</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium">Guest Reviews</div>
                <StarsIcon className="w-5 h-5 text-gray-500" />
              </CardHeader>
              <CardContent className="text-2xl font-bold">4.8</CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CastForEducationOutlinedIcon />
                <CardTitle>Occupancy Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <LinechartChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <BarchartChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Guest Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <BarchartChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <LinechartChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Reservations</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Guest</TableHead>
                    <TableHead>Check-in</TableHead>
                    <TableHead>Check-out</TableHead>
                    <TableHead>Room</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>2023-06-01</TableCell>
                    <TableCell>2023-06-05</TableCell>
                    <TableCell>101</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>2023-06-10</TableCell>
                    <TableCell>2023-06-15</TableCell>
                    <TableCell>201</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Michael Johnson</TableCell>
                    <TableCell>2023-06-20</TableCell>
                    <TableCell>2023-06-25</TableCell>
                    <TableCell>301</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Staff Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Shift</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Front Desk</TableCell>
                    <TableCell>Morning</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>Housekeeping</TableCell>
                    <TableCell>Afternoon</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Michael Johnson</TableCell>
                    <TableCell>Maintenance</TableCell>
                    <TableCell>Evening</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function BarchartChart(props: React.SVGProps<SVGSVGElement>) {
  const data = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <Tooltip />
      <Bar dataKey="desktop" fill="#8884d8" />
    </BarChart>
  );
}

function LinechartChart(props: React.SVG
