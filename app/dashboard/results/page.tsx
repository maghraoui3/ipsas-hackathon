import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

const results = [
  {
    course: "Database Systems",
    grade: "20/20",
    credits: 3,
  },
  {
    course: "Software Engineering",
    grade: "15/20",
    credits: 4,
  },
  {
    course: "Artificial Intelligence",
    grade: "18/20",
    credits: 3,
  },
];

export default function ResultsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Results
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
            Academic Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {result.course}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {result.credits} Credits
                  </p>
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {result.grade}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}