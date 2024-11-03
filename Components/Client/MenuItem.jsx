"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MenuItem = ({
  id,
  key,
  userId,
  name,
  image,
  description,
  category,
  price,
}) => {
  const [userName, setUserName] = useState();

  const openErrorToast = () => {
    toast.error("Please Sign in to Add Item!");
  };

  // Fetch User
  const fetchUser = async () => {
    if (userId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/Api/Users?id=${userId}`
        );

        if (response) {
          setUserName(response.data.user.name);
        }

        console.log(response);
      } catch (error) {
        console.error("Error placing order:", error);
      }
    } else {
      console.log("User ID is required to place an order.");
    }
  };

  // handle order placement
  const handleOrder = async () => {
    console.log(userName);
    if (userId) {
      try {
        const response = await axios.post("http://localhost:3000/Api/Orders", {
          userName: userName,
          userId: userId,
          foodId: id,
        });
        toast.success("Item Added Succesfully!");
      } catch (error) {
        console.error("Error placing order:", error);
      }
    } else {
      console.log("User ID is required to place an order.");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div
      key={key}
      className="card bg-white border shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-102 hover:shadow-2xl relative"
    >
      <div className="px- py-0 bg-gray-100" key={key}>
        <Image
          src={image}
          width={800}
          height={800}
          className="w-full h-full"
          alt="Chicken Burger"
        />
      </div>
      <div className="bg-white px-5 py-4">
        <div className="flex items-center mb-3">
          {[...Array(4)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.684h4.928c.969 0 1.371 1.24.588 1.81l-3.993 2.901 1.518 4.684c.3.921-.755 1.688-1.54 1.155L10 14.347l-3.972 2.814c-.785.534-1.84-.234-1.54-1.155l1.518-4.684-3.993-2.901c-.783-.57-.38-1.81.588-1.81h4.928l1.518-4.684z"></path>
            </svg>
          ))}
          <svg
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 15l-4.62 3.088a.5.5 0 01-.748-.536l1.714-5.284L.5 8.53a.5.5 0 01.288-.88l5.463-.145 1.748-5.245a.5.5 0 01.948 0L10 15z"></path>
          </svg>
          <span className="pl-28">${price}</span>
        </div>
        <h2 className="text-xl font-medium text-gray-800 mb-3">{name}</h2>
        <p className="mb-4">{description}</p>
        <div className="flex w-full h-full align-bottom justify-between">
          {userId ? (
            <button
              href="#"
              onClick={handleOrder}
              className="text-white w-full bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-0 mb-3"
            >
              Add To Cart
            </button>
          ) : (
            <button
              href="#"
              onClick={openErrorToast}
              className="text-white w-full bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-0 mb-3"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
