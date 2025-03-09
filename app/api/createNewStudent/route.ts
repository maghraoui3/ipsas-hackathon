import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/clerk-sdk-node";

interface CreateUserRequest {
  firstName: string;
  lastName: string;
  cin: string;
  password: string;
  birthdate: string;
}

export async function POST(req: Request) {
  try {
    const body: CreateUserRequest = await req.json();
    const { firstName, lastName, cin, password, birthdate } = body;

    if (!firstName || !lastName  || !cin || !password || !birthdate) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const userName = "user" + cin;

    const newUser = await clerkClient.users.createUser({
      firstName,
      lastName, 
      password,
      username: userName,
      externalId: cin,
    });

    return NextResponse.json(
      { message: "User created successfully", userId: newUser.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}