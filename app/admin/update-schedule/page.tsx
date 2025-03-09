import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function UpdateSchedule() {
  return (
    <FadeIn>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Calendar className="h-6 w-6 text-[#0B2C67] dark:text-[#60A5FA]" />
          Update Schedule
        </h1>

        {/* Schedule Update Form */}
        <Card>
          <CardHeader>
            <CardTitle>Update Academic Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="event">Event Name</Label>
                <Input id="event" placeholder="Enter event name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Event Date</Label>
                <Input id="date" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Event Time</Label>
                <Input id="time" type="time" required />
              </div>
              <Button type="submit" className="bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-white dark:text-[#0B2C67] dark:hover:bg-gray-200">
                Update Schedule
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  );
}