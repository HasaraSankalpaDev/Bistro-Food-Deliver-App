"use client";
import Nav from "@/Components/Components/Client/Nav";
import { useState } from "react";
import food_items, { assets } from "@/Components/Assets/assets";
import MenuItem from "@/Components/Components/Client/MenuItem";
import Footer from "@/Components/Components/Client/Footer";

// pages/menu.js
const page = () => {
  const [menu, setMenu] = useState("All");
  const items = Array.isArray(food_items) ? food_items : [];

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
                    ? "bg-orange-600 py-2 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                    : "bg-gray-200 py-2 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                }
              >
                All
              </div>
              <div
                onClick={() => setMenu("Salads")}
                className={
                  menu === "Salads"
                    ? "bg-orange-600 py-2 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                    : "bg-gray-200 py-2 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                }
              >
                Salads
              </div>
              <div
                onClick={() => setMenu("Desserts")}
                className={
                  menu === "Desserts"
                    ? "bg-orange-600 py-2 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                    : "bg-gray-200 py-2 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                }
              >
                Desserts
              </div>
              <div
                onClick={() => setMenu("Sandwiches")}
                className={
                  menu === "Sandwiches"
                    ? "bg-orange-600 py-2 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                    : "bg-gray-200 py-2 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                }
              >
                Sandwiches
              </div>
              <div
                onClick={() => setMenu("Cakes")}
                className={
                  menu === "Cakes"
                    ? "bg-orange-600 py-2 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                    : "bg-gray-200 py-2 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                }
              >
                Cakes
              </div>
              <div
                onClick={() => setMenu("Juce")}
                className={
                  menu === "Juce"
                    ? "bg-orange-600 py-2 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                    : "bg-gray-200 py-2 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                }
              >
                Juce
              </div>
              <div
                onClick={() => setMenu("Noodles")}
                className={
                  menu === "Noodles"
                    ? "bg-orange-600 py-2 px-8 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                    : "bg-gray-200 py-2 px-8 rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                }
              >
                Noodles
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mt-12">
            {items
              .filter((item) =>
                menu === "All" ? true : item.category === menu
              )
              .map((item) => (
                <MenuItem
                  key={item.id}
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
