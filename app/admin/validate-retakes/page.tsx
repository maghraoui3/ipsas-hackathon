import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle } from "lucide-react";

// Mock data for retake requests
const retakes = [
  { id: 1, student: "John Doe", course: "Database Systems", status: "Pending" },
  { id: 2, student: "Jane Smith", course: "Software Engineering", status: "Approved" },
  { id: 3, student: "Alice Johnson", course: "Artificial Intelligence", status: "Pending" },
];

export default function ValidateRetakes() {
  return (
    <FadeIn>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-[#0B2C67] dark:text-[#60A5FA]" />
          Validate Retakes
        </h1>

        {/* Retake Requests Table */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Retake Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {retakes.map((retake) => (
                  <TableRow key={retake.id}>
                    <TableCell>{retake.student}</TableCell>
                    <TableCell>{retake.course}</TableCell>
                    <TableCell>{retake.status}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="mr-2">
                        Approve
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        Reject
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