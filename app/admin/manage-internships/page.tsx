import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function ManageInternships() {
  return (
    <FadeIn>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-[#0B2C67] dark:text-[#60A5FA]" />
          Manage Internships
        </h1>

        {/* Add Internship Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Internship</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Enter company name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input id="position" placeholder="Enter position" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input id="duration" placeholder="Enter duration (e.g., 3 months)" required />
              </div>
              <Button type="submit" className="bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-white dark:text-[#0B2C67] dark:hover:bg-gray-200">
                Add Internship
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      </FadeIn>
  );
}