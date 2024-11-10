"use client";
import { assets } from "@/Components/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fetch User
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
        const { name, email } = response.data.user;
        setUser(response.data.user);
        setName(name);
        setEmail(email);
        setPassword(password);
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
  }, [userId]);
  return (
    <div className="w-full px-8 mt-20 py-4 shadow-lg">
      <div class="p-6 md:flex md:items-center">
        <div class="md:w-1/3">
          <Image
            className="w-30 h-30 md:h-48 object-cover rounded-full mx-auto"
            src={assets.profile_icon}
            alt="User Profile Picture"
          />
        </div>
        <div class="mt-4 md:mt-0 md:ml-6 md:w-2/3">
          <h2 class="text-2xl font-semibold text-gray-800">{name}</h2>
          <p class="text-gray-600 mt-2">Email: {email}</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Verify Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
