"use client";
import Nav from "@/Components/Components/Client/Nav";
import { useEffect, useState } from "react";
import food_items, { assets } from "@/Components/Assets/assets";
import MenuItem from "@/Components/Components/Client/MenuItem";
import Footer from "@/Components/Components/Client/Footer";
import axios from "axios";

// pages/menu.js
const page = () => {
  const [menu, setMenu] = useState("All");
  const [foods, setFoods] = useState([]); // You might not need this state if it's not being used

  const items = Array.isArray(food_items) ? food_items : [];

  // Fetch All Items
  const fetchAllItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Api/food");
      console.log("API Response:", response);
      if (Array.isArray(response.data.foods)) {
        setFoods(response.data.foods);
      } else {
        console.error("Expected an array, received:", response.data);
        setFoods([]); // Set to empty array if response is not as expected
      }
    } catch (error) {
      console.error("Error fetching food items:", error);
      setFoods([]); // Set to empty array in case of error
    }
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  return (
    <div>
      <Nav />
      <div className="px-5 mt-10 py-20 md:px-12 lg:px-28 text-black ">
        <h1 className="text-4xl font-semibold mb-5 ">Our Menu</h1>
        <p className="text-[16px] text-gray-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quis
          est deleniti id iure maiores impedit corrupti neque. Fugiat quidem
          enim laudantium harum fugit aliquam cumque incidunt nam quibusdam!
          Eligendi perspiciatis pariatur est iusto modi soluta numquam eum ea
          ullam.
        </p>

        <div className="menu-row mt-10">
          <div className="flex  align-middle w-full mt-5">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mt-12">
            {foods
              .filter((item) =>
                menu === "All" ? true : item.itemCategory === menu
              )
              .map((item) => (
                <MenuItem
                  id={item._id}
                  key={item._id}
                  name={item.itemName}
                  image={item.itemImage}
                  description={item.itemDescription}
                  category={item.itemCategory}
                  price={item.itemPrice}
                />
              ))}
          </div>
        </div>
        <p className="text-[16px] text-gray-800 mt-12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quis
          est deleniti id iure maiores impedit corrupti neque. Fugiat quidem
          enim laudantium harum fugit aliquam cumque incidunt nam quibusdam!
          Eligendi perspiciatis pariatur est iusto modi soluta numquam eum ea
          ullam.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default page;
