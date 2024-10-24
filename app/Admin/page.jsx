"use client"; // Make sure it's a client component

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Use this instead of useRouter
import UserProfile from "@/Components/Components/Admin/AdminProfile";

const AdminPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div>
      <UserProfile id={id} />
    </div>
  );
};

export default AdminPage;
