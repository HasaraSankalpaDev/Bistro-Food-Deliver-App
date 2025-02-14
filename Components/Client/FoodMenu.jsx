"use client";
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import food_items, { assets } from "@/Components/Assets/assets";
import axios from "axios";

const FoodMenu = () => {
  const [menu, setMenu] = useState("All");
  const [foods, setFoods] = useState([]);
  const [userId, setUserId] = useState(null);

  // Fetch All Items
  const fetchAllItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Api/food");
      if (Array.isArray(response.data.foods)) {
        setFoods(response.data.foods);
      } else {
        console.error("Expected an array, received:", response.data);
        setFoods([]);
      }
    } catch (error) {
      console.error("Error fetching food items:", error);
      setFoods([]);
    }
  };

  useEffect(() => {
    fetchAllItems();
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  return (
    <div className="mt-20 px-5 pt-15 md:px-12 lg:px-28 ">
      <div className="text-center">
        <h2 className="text-4xl font-medium mb-4 text-center relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-orange-600 after:mt-2 after:mx-auto">
          Our Menu
        </h2>
        <p className="py-5 leading-8 text-[16px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex justify-center align-middle w-full mt-5">
        <div className="md:flex items-center space-x-8">
          <div
            onClick={() => setMenu("All")}
            className={
              menu === "All"
                ? "bg-orange-600 py-3 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                : "bg-gray-200 py-3 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            }
          >
            All
          </div>
          <div
            onClick={() => setMenu("Breakfast")}
            className={
              menu === "Breakfast"
                ? "bg-orange-600 py-3 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                : "bg-gray-200 py-3 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            }
          >
            Breakfast
          </div>
          <div
            onClick={() => setMenu("Lunch")}
            className={
              menu === "Lunch"
                ? "bg-orange-600 py-3 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                : "bg-gray-200 py-3 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            }
          >
            Lunch
          </div>
          <div
            onClick={() => setMenu("Dinner")}
            className={
              menu === "Dinner"
                ? "bg-orange-600 py-3 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                : "bg-gray-200 py-3 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            }
          >
            Dinner
          </div>
          <div
            onClick={() => setMenu("Desserts")}
            className={
              menu === "Desserts"
                ? "bg-orange-600 py-3 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                : "bg-gray-200 py-3 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            }
          >
            Desserts
          </div>
          <div
            onClick={() => setMenu("Drinks & Tea")}
            className={
              menu === "Drinks & Tea"
                ? "bg-orange-600 py-3 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                : "bg-gray-200 py-3 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            }
          >
            Drinks
          </div>
          <div
            onClick={() => setMenu("Wine Card")}
            className={
              menu === "Wine Card"
                ? "bg-orange-600 py-3 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                : "bg-gray-200 py-3 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            }
          >
            Wine Card
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-8">
        {foods
          .filter((item) =>
            menu === "All" ? true : item.itemCategory === menu
          )
          .slice(0, 6)
          .map((item) => (
            <MenuItem
              id={item._id}
              key={item._id}
              userId={userId}
              name={item.itemName}
              image={item.itemImage}
              description={item.itemDescription}
              category={item.itemCategory}
              price={item.itemPrice}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodMenu;
