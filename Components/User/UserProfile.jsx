"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchUser = async () => {
    // Only fetch if userId is valid
    if (!userId || userId === "null") {
      console.error("Invalid user ID:", userId);
      return; // Exit early if userId is invalid
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/Api/Users?id=${userId}`
      );

      if (response && response.data && response.data.user) {
        console.log("User Data:", response.data.user);
        const { name, email } = response.data.user; // Destructure name and email
        setUser(response.data.user);
        setName(name);
        setEmail(email);
        // Do not set the password for security reasons
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [userId]); // Fetch user when userId changes

  return (
    <div>
      <div className="my-10 px-8 mt-20 py-8 rounded-lg shadow-lg w-[100%]">
        <div className="w-[100%]">
          <h1 className="text-2xl font-semibold">Hello! {name || "User"}</h1>
          <p className="text-medium text-gray-600 my-3">
            Your profile information is below:
          </p>
          <form className="-mt-10">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-3">
                Your Name:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name on change
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-3">
                Email Address:
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 p-3"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email on change
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-3">
                Password:
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 p-3"
                placeholder="Your Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password on change
              />
            </div>
            <div className="w-full">
              <button className="bg-orange-600 py-2 px-5 w-full text-white rounded-lg">
                Verify Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
