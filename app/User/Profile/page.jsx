import UserProfile from "@/Components/Components/User/UserProfile";
import UserProfileEdit from "@/Components/Components/User/UserProfileEdit";
import React from "react";

const page = () => {
  return (
    <div className="w-full mt-20">
      <UserProfile />
      <UserProfileEdit />
    </div>
  );
};

export default page;
