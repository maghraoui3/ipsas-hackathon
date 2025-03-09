import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    // Parse the request body as JSON
    const requestBody = await request.json();
    const { userId, role } = requestBody;

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    if (!role) {
      return NextResponse.json({ error: "Missing role" }, { status: 400 });
    }

    // Query the user document
    const usersCollectionRef = collection(db, "utilisateurs");
    const q = query(usersCollectionRef, where("id", "==", userId));
    const userDocsSnap = await getDocs(q);

    if (userDocsSnap.empty) {
      return NextResponse.json({ error: "User document not found" }, { status: 404 });
    }

    // Get the user document reference
    const userDocSnap = userDocsSnap.docs[0];
    const userDocRef = doc(db, "utilisateurs", userDocSnap.id);


    // Update the Firestore document
    await updateDoc(userDocRef, { role });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating role:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
