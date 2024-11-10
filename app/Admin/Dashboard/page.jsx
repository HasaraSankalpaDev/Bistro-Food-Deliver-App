"use client"; // Make sure it's a client component

import React, { useEffect, useState } from "react";
import UserProfile from "@/Components/Components/Admin/AdminProfile";
import { useSearchParams } from "next/navigation"; // Use this instead of useRouter
import { useRouter } from "next/navigation";

function page() {
  const [adminId, setAdminId] = useState();
  const router = useRouter();
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
