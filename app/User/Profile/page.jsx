"use client"; // Make sure it's a client component

import React, { useEffect, useState } from "react";
import UserProfile from "@/Components/Components/User/UserProfile";
import UserProfileEdit from "@/Components/Components/User/UserProfileEdit";

import { useSearchParams } from "next/navigation"; // Use this instead of useRouter
import { useRouter } from "next/navigation";

const page = () => {
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  return (
    <div className="w-full mt-20">
      <UserProfile />
      <UserProfileEdit />
    </div>
  );
};

export default page;
