"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  userName: string;
  userId: string;
}

const CheckAndUpdateRole: React.FC<Props> = ({ userName, userId }) => {
  const router = useRouter();

  useEffect(() => {
    const checkAndUpdateRole = async () => {
      try {
        // First API call to check if user is predefined admin
        const checkResponse = await fetch(`/api/checkPredifAdmin?userName=${userName}`);
        const isAdmin = await checkResponse.json();

        if (isAdmin === true) {
          // Second API call to update role
          const updateResponse = await fetch(`/api/updateRole`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId, role: "Admin" }), // Send role in body
          });

          if (updateResponse.ok) {
            // Redirect to dashboard if successful
            router.push("/dashboardadmin");
          } else {
            console.error("Failed to update role");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    checkAndUpdateRole();
  }, [userName, userId, router]);

  return null;
};

export default CheckAndUpdateRole;
