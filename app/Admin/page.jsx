"use client"; // Make sure it's a client component

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Use this instead of useRouter
import UserProfile from "@/Components/Components/Admin/AdminProfile";

const AdminPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [adminId, setAdminId] = useState();
  useEffect(() => {
    const id = localStorage.getItem("adminId");
    setAdminId(id);
  }, []);

  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default AdminPage;
