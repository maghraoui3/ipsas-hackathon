import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText } from "lucide-react";

// Mock data for paperwork requests
const requests = [
  { id: 1, student: "John Doe", request: "Transcript Request", status: "Pending" },
  { id: 2, student: "Jane Smith", request: "Enrollment Certificate", status: "Completed" },
  { id: 3, student: "Alice Johnson", request: "Degree Verification", status: "Pending" },
];

export default function PaperworkRequests() {
  return (
    <FadeIn>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="h-6 w-6 text-[#0B2C67] dark:text-[#60A5FA]" />
          Paperwork Requests
        </h1>

        {/* Requests Table */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Request</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.student}</TableCell>
                    <TableCell>{request.request}</TableCell>
                    <TableCell>{request.status}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        Mark as Completed
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