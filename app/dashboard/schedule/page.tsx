import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "9:00 AM", course: "Database Systems", room: "Room 101" },
      { time: "11:00 AM", course: "Software Engineering", room: "Room 202" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "10:00 AM", course: "Artificial Intelligence", room: "Room 303" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "9:00 AM", course: "Database Systems", room: "Room 101" },
      { time: "2:00 PM", course: "Web Development", room: "Room 404" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "11:00 AM", course: "Software Engineering", room: "Room 202" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "10:00 AM", course: "Artificial Intelligence", room: "Room 303" },
      { time: "1:00 PM", course: "Web Development", room: "Room 404" },
    ],
  },
];

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Schedule
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
            Weekly Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {schedule.map((day) => (
              <div key={day.day}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {day.day}
                </h3>
                <div className="space-y-2">
                  {day.classes.map((cls, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        {cls.time}
                      </div>
                      <div className="text-sm text-gray-900 dark:text-white">
                        {cls.course}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {cls.room}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}