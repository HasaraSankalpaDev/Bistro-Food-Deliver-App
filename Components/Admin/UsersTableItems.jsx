"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersTableItems = () => {
  const [usersList, setUsersList] = useState([]); // Initialize as an empty array

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Api/Users");
      console.log("API Response:", response);
      if (Array.isArray(response.data.users)) {
        setUsersList(response.data.users);
      } else {
        console.error("Expected an array, received:", response.data);
        setUsersList([]); // Set to empty array if response is not as expected
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsersList([]); // Set to empty array in case of error
    }
  };

  const handleDelete = async (userId) => {
    try {
      console.log("Deleting user with ID:", userId);

      const response = await axios.delete(
        `http://localhost:3000/Api/Users?id=${userId}`
      );

      console.log("API Response:", response);

      if (response.status === 200) {
        // Assuming you want to update the users list in your state
        setUsersList((prevList) =>
          prevList.filter((user) => user._id !== userId)
        );
        console.log("User deleted successfully");
      } else {
        console.error("Failed to delete user:", response);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <tbody className="text-gray-600 text-sm font-light">
      {usersList.map((user) => (
        <tr
          key={user._id}
          className="border-b border-gray-200 hover:bg-gray-100"
        >
          <td className="py-3 px-6">{user._id}</td>
          <td className="py-3 px-6">{user.name}</td>
          <td className="py-3 px-6">{user.email}</td>
          <td className="py-3 px-6">{user.type}</td>
          <td className="py-3 px-6 flex space-x-2">
            <button
              onClick={() => handleDelete(user._id)}
              className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UsersTableItems;
