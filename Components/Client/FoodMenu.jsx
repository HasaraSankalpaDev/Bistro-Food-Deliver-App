"use client";

// import { assets } from "../../Assets/assets"; // Ensure this import is correct
import Image from "next/image";
import React, { useState } from "react";
// import food_items from "@/Assets/assets"; // Ensure this is correctly imported
import MenuItem from "./MenuItem";
import food_items, { assets } from "@/Components/Assets/assets";

const FoodMenu = () => {
  const [menu, setMenu] = useState("All");
  const [foods, setFoods] = useState([]); // You might not need this state if it's not being used

  // Log food_items to check its value
  console.log(food_items[2]);

  // Provide a default empty array if food_items is undefined
  const items = Array.isArray(food_items) ? food_items : [];

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
            onClick={() => setMenu("Salads")}
            className={
              menu === "Salads"
                ? "bg-orange-600 py-3 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                : "bg-gray-200 py-3 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            }
          >
            Salads
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
            onClick={() => setMenu("Sandwiches")}
            className={
              menu === "Sandwiches"
                ? "bg-orange-600 py-3 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                : "bg-gray-200 py-3 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            }
          >
            Sandwiches
          </div>
          <div
            onClick={() => setMenu("Cakes")}
            className={
              menu === "Cakes"
                ? "bg-orange-600 py-3 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                : "bg-gray-200 py-3 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            }
          >
            Cakes
          </div>
          <div
            onClick={() => setMenu("Juce")}
            className={
              menu === "Juce"
                ? "bg-orange-600 py-3 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                : "bg-gray-200 py-3 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            }
          >
            Juce
          </div>
          <div
            onClick={() => setMenu("Noodles")}
            className={
              menu === "Noodles"
                ? "bg-orange-600 py-3 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                : "bg-gray-200 py-3 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            }
          >
            Noodles
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-8">
        {/* // Card */}
        {items
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item) => (
            <MenuItem
              id={item.id}
              name={item.name}
              image={item.image}
              description={item.short_description}
              category={item.category}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodMenu;
