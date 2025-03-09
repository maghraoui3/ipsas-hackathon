import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function UpdateWebsite() {
  return (
    <FadeIn>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Globe className="h-6 w-6 text-[#0B2C67] dark:text-[#60A5FA]" />
          Update Website
        </h1>

        {/* Website Update Form */}
        <Card>
          <CardHeader>
            <CardTitle>Update Website Content</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="page">Page Name</Label>
                <Input id="page" placeholder="Enter page name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Input id="content" placeholder="Enter new content" required />
              </div>
              <Button type="submit" className="bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-white dark:text-[#0B2C67] dark:hover:bg-gray-200">
                Update Content
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  );
}