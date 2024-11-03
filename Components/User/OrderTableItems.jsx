"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const OrderTableItems = ({ userName, userId, foodId, index }) => {
  const [foodName, setFoodName] = useState();
  const [foodPrice, setFoodPrice] = useState();
  // Fetch Food Item
  const fetchFoodItem = async () => {
    if (foodId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/Api/food?id=${foodId}`
        );
        if (response) {
          console.log(response);
          setFoodName(response.data.food.itemName);
          setFoodPrice(response.data.food.itemPrice);
        }
      } catch (error) {
        console.log(errors);
      }
    }
  };

  useEffect(() => {
    fetchFoodItem();
  }, []);
  return (
    <tr
      // key={order._id}
      className="border-b border-gray-200 hover:bg-gray-100"
    >
      <td className="py-3 px-6">{index}</td>
      <td className="py-3 px-6">{foodName}</td>
      <td className="py-3 px-6">{foodPrice}</td>
      <td className="py-3 px-6">01</td>
      <td className="py-3 px-6 flex space-x-2 w-full justify-center">
        <IoClose className="text-red-700 text-xl cursor-pointer" />
      </td>
    </tr>
  );
};

export default OrderTableItems;
