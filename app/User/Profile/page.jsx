"use client";
import React from "react";
import UserProfile from "@/Components/Components/User/UserProfile";
import UserProfileEdit from "@/Components/Components/User/UserProfileEdit";

const page = () => {
  return (
    <div className="w-full mt-20">
      <UserProfile />
      <UserProfileEdit />
    </div>
  );
};

export default page;
