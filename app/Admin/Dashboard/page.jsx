"use client";
import React, { useEffect, useState } from "react";
import UserProfile from "@/Components/Components/Admin/AdminProfile";
import { useRouter } from "next/navigation";

function page() {
  const [adminId, setAdminId] = useState();
  const router = useRouter();

  // Check user is real user
  if (!adminId) {
    router.push("http://localhost:3000/pages/404");
  }

  useEffect(() => {
    const id = localStorage.getItem("adminId");
    setAdminId(id);
  }, []);

  return (
    <div>
      <UserProfile id={adminId} />
    </div>
  );
}

export default page;
