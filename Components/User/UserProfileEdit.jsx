"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const UserProfileEdit = () => {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  // Fetch user data
  const fetchUser = async () => {
    if (!userId || userId === "null") {
      console.error("Invalid user ID:", userId);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/Api/Users?id=${userId}`
      );
      if (response && response.data && response.data.user) {
        console.log("User Data:", response.data.user);
        const { name, email, password } = response.data.user;
        setUser(response.data.user);
        setName(name);
        setEmail(email);
        setUser((prev) => ({ ...prev, password })); // Store the current password in `user`
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
    if (userId) {
      fetchUser();
    }
  }, [userId]);

  // HandleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (oldPassword !== user.password) {
      // Compare oldPassword with user.password
      toast.error("Old password does not match.");
      return;
    }

    const formData = new FormData();
    formData.append("id", userId);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password); // New password

    try {
      const response = await axios.put(
        "http://localhost:3000/Api/Users",
        formData
      );
      console.log(response);
      toast.success("Profile updated successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="my-10 px-8 mt-5 py-8 rounded-lg shadow-lg w-full">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-6">Edit Your Profile</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2">Your Name:</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address:
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded-lg"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Old Password:
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 p-3 rounded-lg"
              placeholder="Your Old Password"
              name="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              New Password:
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 p-3 rounded-lg"
              placeholder="Your New Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-orange-600 py-3 px-6 w-full text-white rounded-lg hover:bg-orange-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfileEdit;
