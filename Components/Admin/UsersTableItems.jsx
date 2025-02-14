"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UsersTableItems = () => {
  const [usersList, setUsersList] = useState([]);

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Api/Users");
      if (Array.isArray(response.data.users)) {
        setUsersList(response.data.users);
      } else {
        console.error("Expected an array, received:", response.data);
        setUsersList([]);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsersList([]);
    }
  };

  // Handle Delete
  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/Api/Users?id=${userId}`
      );

      if (response.status === 200) {
        setUsersList((prevList) =>
          prevList.filter((user) => user._id !== userId)
        );
        toast.success("User Deleted Successfully!");
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
