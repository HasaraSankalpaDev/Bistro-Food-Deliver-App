"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderCard = ({ foodId, quantity }) => {
  const [foodName, setFoodName] = useState();
  const [foodPrice, setFoodPrice] = useState();
  const [foodImage, setFoodImage] = useState();

  // Fetch Food Item
  const fetchFoodItem = async () => {
    if (foodId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/Api/food?id=${foodId}`
        );
        if (response) {
          setFoodName(response.data.food.itemName);
          setFoodPrice(response.data.food.itemPrice);
          setFoodImage(response.data.food.itemImage);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchFoodItem(foodImage);
  }, [foodId]);
  return (
    <div className="w-full flex items-center justify-between bg-white rounded-lg shadow-lg py-2 my-2 px-4 border border-gray-200">
      <img
        src={`http://localhost:3000${foodImage}`}
        alt="Profile"
        className="w-[60px] h-[60px] rounded-full border-gray-300 "
      />
      <div className="text-right">
        <p className="text-lg font-semibold text-gray-800">{foodName}</p>
        <p className="text-gray-500 font-medium">
          ${foodPrice} <span className="text-gray-400">x {quantity}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
