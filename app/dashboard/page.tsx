import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  GraduationCap,
  Trophy,
  Bell,
  Calendar,
  Clock,
} from "lucide-react";

const stats = [
  {
    title: "Current GPA",
    value: "3.75",
    description: "Out of 4.0",
    icon: Trophy,
  },
  {
    title: "Courses",
    value: "6",
    description: "Currently enrolled",
    icon: BookOpen,
  },
  {
    title: "Credits",
    value: "18",
    description: "This semester",
    icon: GraduationCap,
  },
];

const upcomingEvents = [
  {
    title: "Database Systems Exam",
    date: "April 15, 2024",
    time: "10:00 AM",
  },
  {
    title: "Software Engineering Project Due",
    date: "April 18, 2024",
    time: "11:59 PM",
  },
  {
    title: "AI Workshop",
    date: "April 20, 2024",
    time: "2:00 PM",
  },
];

const announcements = [
  {
    title: "Campus Career Fair",
    description: "Join us for the annual career fair featuring top tech companies.",
    date: "2 hours ago",
  },
  {
    title: "New Course Registration",
    description: "Registration for Fall 2024 semester opens next week.",
    date: "1 day ago",
  },
  {
    title: "Library Hours Extended",
    description: "Extended hours during final exam period.",
    date: "2 days ago",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back, John
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
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

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="flex items-start space-x-4 border-b last:border-0 pb-4 last:pb-0"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
              Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.title}
                  className="border-b last:border-0 pb-4 last:pb-0"
                >
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {announcement.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {announcement.description}
                  </p>
                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                    {announcement.date}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}