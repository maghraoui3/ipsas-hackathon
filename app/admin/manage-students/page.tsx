import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users } from "lucide-react";
import FadeIn from "@/components/FadeIn";

// Mock data for students
const students = [
  { id: 1, name: "John Doe", email: "john@example.com", program: "Computer Science" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", program: "Mechanical Engineering" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", program: "Business IT" },
];

export default function ManageStudents() {
  return (
    <FadeIn>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Users className="h-6 w-6 text-[#0B2C67] dark:text-[#60A5FA]" />
          Manage Students
        </h1>

        {/* Add Student Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Student</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter student name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter student email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="program">Program</Label>
                <Input id="program" placeholder="Enter program" required />
              </div>
              <Button type="submit" className="bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-white dark:text-[#0B2C67] dark:hover:bg-gray-200">
                Add Student
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Students Table */}
        <Card>
          <CardHeader>
            <CardTitle>Student List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.program}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  );
}