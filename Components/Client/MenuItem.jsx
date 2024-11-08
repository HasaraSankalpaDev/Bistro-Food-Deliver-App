"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoRemove } from "react-icons/io5";
import { toast } from "react-toastify";
import "./ClientComponents.css";

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
  const [itemCount, setItemCount] = useState(1);

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
          itemCount: itemCount,
        });
        console.log(response);
        toast.success("Order Successfully Saved!");
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
    <div key={key} className="card bg-white">
      <div className="food-item shadow-xl">
        <div className="food-item-img-container">
          <img src={image} alt="Food Item" className="food-item-image" />
          {!itemCount ? (
            <FaPlus
              className="add-icon bg-slate-200"
              onClick={() => setItemCount((prev) => prev + 1)}
            />
          ) : (
            <div className="food-item-counter rounded-full bg-slate-200">
              <FaPlus
                className="counter-icon-plus "
                onClick={() => setItemCount((prev) => prev + 1)}
              />
              <p className="item-count mx-2">{itemCount}</p>
              <IoRemove
                className="counter-icon-remove"
                onClick={() => setItemCount((prev) => prev - 1)}
              />
            </div>
          )}
        </div>

        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <div className="flex">
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
            </div>
          </div>
          <p className="food-item-dec">{description}</p>
          <p className="food-item-price text-orange-600">${price}</p>
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
