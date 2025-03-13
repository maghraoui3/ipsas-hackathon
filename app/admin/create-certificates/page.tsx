'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FileBadge } from "lucide-react";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function CreateCertificates() {
  const [isLoading, setIsLoading] = useState(false);
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      studentName: formData.get("studentName"),
      studentId: formData.get("studentId"),
      certificateType: formData.get("certificateType"),
      issueDate: formData.get("issueDate"),
      template: formData.get("template"),
    };

    try {
      const response = await fetch("/api/generate-certificate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setCertificateUrl(result.certificateUrl);
    } catch (error) {
      console.error("Error generating certificate:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FadeIn>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FileBadge className="h-6 w-6 text-[#0B2C67] dark:text-[#60A5FA]" />
          Create Certificates
        </h1>

        <Card>
          <CardHeader>
            <CardTitle>Certificate Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Form Fields */}
              <div className="space-y-2">
                <Label htmlFor="studentName">Student Name</Label>
                <Input id="studentName" name="studentName" placeholder="Enter student name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID</Label>
                <Input id="studentId" name="studentId" placeholder="Enter student ID" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="certificateType">Certificate Type</Label>
                <Select name="certificateType">
                  <SelectTrigger>
                    <SelectValue placeholder="Select certificate type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="graduation">Graduation Certificate</SelectItem>
                    <SelectItem value="course-completion">Course Completion Certificate</SelectItem>
                    <SelectItem value="achievement">Achievement Certificate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="issueDate">Issue Date</Label>
                <Input id="issueDate" name="issueDate" type="date" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="template">Certificate Template</Label>
                <Select name="template">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="template1">Template 1</SelectItem>
                    <SelectItem value="template2">Template 2</SelectItem>
                    <SelectItem value="template3">Template 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Generating..." : "Generate Certificate"}
                </Button>
              </div>
            </form>

            {certificateUrl && (
              <div className="mt-4">
                <a href={certificateUrl} target="_blank" rel="noopener noreferrer" className="text-[#0B2C67] dark:text-[#60A5FA] hover:underline">
                  Download Certificate
                </a>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  );
}