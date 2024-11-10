"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UserProfile = ({ id }) => {
  // User Data
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  // Fetch User's Data
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/Api/Users?id=${id}`
      );
      console.log(response);
      setName(response.data.user.name);
      setEmail(response.data.user.email);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]); // Depend on adminId

  return (
    <div>
      <div className="bg-gray-100 my-10 px-8 py-8 rounded-lg shadow-lg">
        <h1 className="text-2xl flex w-full justify-between align-middle font-bold border-b border-gray-300 mb-3 pb-3 text-gray-700">
          Hello {name || "User"}
        </h1>
        <div className="text-lg text-gray-600">
          <p className="mb-2">
            <span className="font-semibold">Email:</span>{" "}
            {email || "Not available"}
          </p>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            nemo saepe itaque omnis cumque neque harum cupiditate amet libero
            nulla, eligendi officia illum adipisci. Totam quae tempore corrupti
            aliquam assumenda?
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
