import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Handshake } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function ManagePartnerships() {
  return (
    <FadeIn>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Handshake className="h-6 w-6 text-[#0B2C67] dark:text-[#60A5FA]" />
          Manage Partnerships
        </h1>

        {/* Add Partnership Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Partnership</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="organization">Organization Name</Label>
                <Input id="organization" placeholder="Enter organization name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Person</Label>
                <Input id="contact" placeholder="Enter contact person" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Contact Email</Label>
                <Input id="email" type="email" placeholder="Enter contact email" required />
              </div>
              <Button type="submit" className="bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-white dark:text-[#0B2C67] dark:hover:bg-gray-200">
                Add Partnership
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  );
}