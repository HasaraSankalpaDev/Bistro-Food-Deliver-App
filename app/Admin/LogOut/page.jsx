"use client";
import React, { useState, useEffect } from "react";

const LogoutPage = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("id");
    setUserId(id);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId"); // Remove userId from local storage
    setUserId(null); // Clear the userId from component state
    // Optionally, redirect to login page or another page
  };

  useEffect(() => {
    handleLogout();
    window.location.href = "  http://localhost:3000";
  }, []);
  return (
    <div>
      <h1>Logout Page</h1>
      {userId ? (
        <p>Logged in as user ID: {userId}</p>
      ) : (
        <p>You are not logged in.</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutPage;
