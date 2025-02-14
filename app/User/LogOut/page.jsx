"use client";
import React, { useState, useEffect } from "react";

const LogoutPage = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setUserId(null);
  };

  useEffect(() => {
    handleLogout();
    window.location.href = "  http://localhost:3000";
  }, []);
  return <div></div>;
};

export default LogoutPage;
