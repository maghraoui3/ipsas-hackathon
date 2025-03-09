"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import CheckAndUpdateRole from "@/components/CheckAndUpdateRoleAdmin";

export default function DashboardAdminAfterSignup() {
  const { user } = useUser();
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;

      try {
        const userId = user.id;
        setUserId(userId);
        const usersCollectionRef = collection(db, "utilisateurs");
        const q = query(usersCollectionRef, where("id", "==", userId));
        const userDocsSnap = await getDocs(q);

        if (!userDocsSnap.empty) {
          const userDocSnap = userDocsSnap.docs[0];

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUsername(userData.userName || "Unknown");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      {username && <CheckAndUpdateRole userName={username} userId={userId!} />}
    </div>
  );
}
