import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const internships = [
  {
    company: "TechCorp",
    position: "Software Engineering Intern",
    duration: "3 months",
  },
  {
    company: "DataWorks",
    position: "Data Science Intern",
    duration: "6 months",
  },
  {
    company: "AI Solutions",
    position: "AI Research Intern",
    duration: "4 months",
  },
];

export default function InternshipsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Internships
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
            Internship Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {internship.position}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {internship.company}
                  </p>
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {internship.duration}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}