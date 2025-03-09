"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  GraduationCap,
  ClipboardList,
  Briefcase,
  CreditCard,
  User,
  LogOut,
  Menu,
  X,
  MessageCircle,
  Badge
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Schedule",
    href: "/dashboard/schedule",
    icon: Calendar,
  },
  {
    title: "Courses",
    href: "/dashboard/courses",
    icon: GraduationCap,
  },
  {
    title: "Results",
    href: "/dashboard/results",
    icon: ClipboardList,
  },
  {
    title: "Internships",
    href: "/dashboard/internships",
    icon: Briefcase,
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: Calendar,
  },
  {
    title: "Chatbot",
    href: "/dashboard/chatbot",
    icon: MessageCircle,
  },
  {
    title: "Certifications",
    href: "/dashboard/certifications",
    icon: Badge,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex h-16 items-center px-4 md:px-6">
          <Button
            variant="ghost"
            className="mr-2 md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white dark:bg-gray-800 border-r transition-transform duration-200 ease-in-out md:translate-x-0 md:static ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center border-b px-6">
            <Link href="/dashboard" className="flex items-center">
              <GraduationCap className="h-6 w-6 text-[#0B2C67] dark:text-white" />
              <span className="ml-2 font-bold text-xl text-[#0B2C67] dark:text-white">
                IPSAS
              </span>
            </Link>
          </div>
          <nav className="space-y-1 px-3 py-4">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#0B2C67] text-white dark:bg-[#60A5FA]"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}