"use client"; // Make sure it's a client component

import React, { useEffect, useState } from "react";
function page() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);
  return (
    <div>
      <h2>Order Pahe</h2>
      <div>User ID: {userId ? userId : "No user ID set"}</div>
    </div>
  );
}

export default page;
