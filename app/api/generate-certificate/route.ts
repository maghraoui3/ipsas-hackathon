import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { studentName, studentId, certificateType, issueDate, template } = body;

  // Simulate certificate generation
  const certificateUrl = `https://example.com/certificate?name=${studentName}&id=${studentId}&type=${certificateType}&date=${issueDate}&template=${template}`;

  return NextResponse.json({ certificateUrl });
}