"use client"; // Mark this as a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  Calendar,
  Briefcase,
  FileText,
  Handshake,
  Globe,
  UserPlus,
  BookOpen,
  DollarSign,
  CheckCircle,
  FileBadge,
} from "lucide-react";
import { cn } from "@/lib/utils"; // Ensure you have a utility for class merging

const adminLinks = [
  {
    title: "Manage Students",
    icon: Users,
    href: "/admin/manage-students",
  },
  {
    title: "Update Schedule",
    icon: Calendar,
    href: "/admin/update-schedule",
  },
  {
    title: "Manage Internships",
    icon: Briefcase,
    href: "/admin/manage-internships",
  },
  {
    title: "Paperwork Requests",
    icon: FileText,
    href: "/admin/paperwork-requests",
  },
  {
    title: "Manage Partnerships",
    icon: Handshake,
    href: "/admin/manage-partnerships",
  },
  {
    title: "Update Website",
    icon: Globe,
    href: "/admin/update-website",
  },
  {
    title: "Create Student Account",
    icon: UserPlus,
    href: "/admin/create-student",
  },
  {
    title: "Manage Teachers",
    icon: BookOpen,
    href: "/admin/manage-teachers",
  },
  {
    title: "Update Salaries",
    icon: DollarSign,
    href: "/admin/update-salaries",
  },
  {
    title: "Validate Retakes",
    icon: CheckCircle,
    href: "/admin/validate-retakes",
  },
  {
    title: "Create Certificates",
    icon: FileBadge,
    href: "/admin/create-certificates",
  },
];

export function Sidebar() {
  const pathname = usePathname(); // Get the current path

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Admin Dashboard
        </h2>
      </div>
      <nav className="space-y-1 p-2">
        {adminLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={cn(
              "flex items-center p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md",
              pathname === link.href && "bg-gray-100 dark:bg-gray-700 font-semibold" // Apply active styles
            )}
          >
            <link.icon className="h-5 w-5 mr-2 text-[#0B2C67] dark:text-[#60A5FA]" />
            {link.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}