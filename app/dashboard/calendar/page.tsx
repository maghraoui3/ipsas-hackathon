import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Calendar
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
            Academic Calendar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[600px]">
            {/* Add a calendar component here (e.g., FullCalendar or React Big Calendar) */}
            <p className="text-gray-500 dark:text-gray-400">
              Calendar view will be added here.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}