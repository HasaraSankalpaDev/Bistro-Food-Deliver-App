"use client";
import React, { useEffect, useState } from "react";
import UserProfile from "@/Components/Components/Admin/AdminProfile";

function page() {
  const [adminId, setAdminId] = useState();

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
