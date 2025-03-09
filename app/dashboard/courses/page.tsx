import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const courses = [
  {
    code: "CS101",
    name: "Introduction to Computer Science",
    instructor: "Dr. Smith",
    credits: 3,
  },
  {
    code: "SE201",
    name: "Software Engineering",
    instructor: "Dr. Johnson",
    credits: 4,
  },
  {
    code: "AI301",
    name: "Artificial Intelligence",
    instructor: "Dr. Brown",
    credits: 3,
  },
];

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Courses
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
            Enrolled Courses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courses.map((course) => (
              <div
                key={course.code}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {course.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {course.code} - {course.instructor}
                  </p>
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {course.credits} Credits
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}