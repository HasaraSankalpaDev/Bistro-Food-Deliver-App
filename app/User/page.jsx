"use client"; // Make sure it's a client component

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Use this instead of useRouter
import UserProfile from "@/Components/Components/User/UserProfile";

const AdminPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      localStorage.setItem("userId", id); // Store the user ID in local storage
    }
  }, [id]);

  return (
    <div>
      <UserProfile id={id} />
    </div>
  );
};

export default AdminPage;
