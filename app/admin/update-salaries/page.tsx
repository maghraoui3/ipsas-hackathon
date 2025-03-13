import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function UpdateSalaries() {
  return (
    <FadeIn>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-[#0B2C67] dark:text-[#60A5FA]" />
          Update Salaries
        </h1>

        {/* Salary Update Form */}
        <Card>
          <CardHeader>
            <CardTitle>Update Teacher Salary</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="teacher">Teacher Name</Label>
                <Input id="teacher" placeholder="Enter teacher name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">New Salary</Label>
                <Input id="salary" type="number" placeholder="Enter new salary" required />
              </div>
              <Button type="submit" className="bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-white dark:text-[#0B2C67] dark:hover:bg-gray-200">
                Update Salary
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  );
}