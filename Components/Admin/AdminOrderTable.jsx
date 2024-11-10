"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminOrderTable = ({
  id,
  index,
  userName,
  foodId,
  date,
  userId,
  quantity,
}) => {
  const [foodItem, setFoodItem] = useState([]);
  const [foodName, setFoodName] = useState([]);
  const [foodImage, setFoodImage] = useState([]);

  // Fetch Food Item
  const fetchFoodItem = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/Api/food?id=${foodId}`
      );
      console.log(response);
      setFoodItem(response.data.food);
      setFoodName(response.data.food.itemName);
      setFoodImage(response.data.food.itemImage);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/Api/Orders?id=${id}`
      );

      if (response.status === 200) {
        toast.success("Order deleted successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        toast.error("Failed to delete order!");
      }
    } catch (err) {
      console.error(
        "Error deleting order:",
        err.response || err.message || err
      );
    }
  };

  useEffect(() => {
    fetchFoodItem();
  }, []);
  return (
    <tr className="border-b border-gray-300">
      <td className="p-5 text-start align-middle">{index}</td>
      <td className="text-start align-middle">{userName}</td>
      <td className="flex items-center justify-start space-x-3">
        <Image
          src={`${foodImage}`}
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="text-start">{foodName}</p>
      </td>
      <td className="text-center align-middle">{quantity}</td>
      <td className="text-start align-middle">
        {new Date(date).toLocaleDateString()}
      </td>
      <td className="text-center align-middle">
        <button
          className="py-1 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AdminOrderTable;
