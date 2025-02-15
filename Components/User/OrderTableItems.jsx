"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const OrderTableItems = ({
  userName,
  userId,
  foodId,
  index,
  id,
  quantity,
  setFullPrice,
}) => {
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
          console.log(response);
          setFoodName(response.data.food.itemName);
          setFoodPrice(response.data.food.itemPrice);
          setFoodImage(response.data.food.itemImage);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Delete Food Item
  const handleDelete = async (id) => {
    if (id) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/Api/Orders?id=${id}`
        );
        if (response) {
          console.log("Order deleted successfully!");
          fetchFoodItem();
          toast.success("Item Removed Successfully!");
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchFoodItem(foodImage);
  }, [foodId]);

  // Calculate Full Price
  useEffect(() => {
    if (foodPrice && quantity) {
      const itemFullPrice = foodPrice * quantity;
      setFullPrice((prev) => prev + itemFullPrice);
    }
  }, [foodPrice, quantity, setFullPrice]);

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6">{index + 1}</td>
      <td className="py-3 px-6">
        <img
          src={`http://localhost:3000/${foodImage}`}
          alt={foodName}
          className="w-[50px] h-[50px] rounded-full"
        />
      </td>
      <td className="py-3 px-6">{foodName}</td>
      <td className="py-3 px-6">{foodPrice}</td>
      <td className="py-3 px-6 text-center">{quantity}</td>
      <td className="py-3 px-6 flex space-x-2 w-full h-full align-middle justify-center">
        <IoClose
          className="text-red-700 text-xl cursor-pointer"
          onClick={() => handleDelete(id)}
        />
      </td>
    </tr>
  );
};

export default OrderTableItems;
