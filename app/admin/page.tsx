import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
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
  
  const adminStats = [
    {
      title: "Total Students",
      value: "1,250",
      description: "Currently enrolled",
      icon: Users,
    },
    {
      title: "Total Teachers",
      value: "85",
      description: "Active faculty",
      icon: BookOpen,
    },
    {
      title: "Pending Requests",
      value: "12",
      description: "Paperwork to review",
      icon: FileText,
    },
  ];
  
  const recentActivities = [
    {
      title: "Updated Schedule",
      description: "Updated the timetable for the Computer Science department.",
      date: "2 hours ago",
      icon: Calendar,
    },
    {
      title: "New Partnership",
      description: "Signed a partnership agreement with TechCorp.",
      date: "1 day ago",
      icon: Handshake,
    },
    {
      title: "Salary Update",
      description: "Processed salary updates for faculty members.",
      date: "2 days ago",
      icon: DollarSign,
    },
  ];
  
  const quickActions = [
    {
      title: "Create Student Account",
      icon: UserPlus,
      href: "/admin/create-student",
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
      title: "Validate Retakes",
      icon: CheckCircle,
      href: "/admin/validate-retakes",
    },
    {
      title: "Create Certificates",
      icon: FileBadge,
      href: "/admin/create-certificates",
    },
    {
      title: "Manage Partnerships",
      icon: Handshake,
      href: "/admin/manage-partnerships",
    },
  ];
  
  export default function AdminDashboard() {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, Admin
          </h1>
        </div>
  
        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {adminStats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#0B2C67] dark:text-white">
                  {stat.value}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
  
        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quickActions.map((action) => (
            <Card key={action.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <action.icon className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
                  {action.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={action.href}
                  className="text-sm text-[#0B2C67] dark:text-[#60A5FA] hover:underline"
                >
                  Go to {action.title} →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
  
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.title}
                  className="flex items-start space-x-4 border-b last:border-0 pb-4 last:pb-0"
                >
                  <activity.icon className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {activity.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {activity.description}
                    </p>
                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                      {activity.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }