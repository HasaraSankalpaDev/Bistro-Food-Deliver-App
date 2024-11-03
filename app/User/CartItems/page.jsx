"use client";

import OrderTableItems from "@/Components/Components/User/OrderTableItems";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [userName, setUserName] = useState(null);
  const [foodItemId, setFoodItemId] = useState(null);
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState(null);

  // Get User Name
  const fetchUserName = async () => {
    if (userId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/Api/Users?id=${userId}`
        );
        if (response && response.data.user) {
          setUserName(response.data.user.name);
        }
      } catch (err) {
        console.error("Error fetching user name:", err);
      }
    }
  };

  // Get Orders by UserName
  const fetchOrder = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/Api/Orders?userName=${userName}`
      );
      if (response && response.data.order) {
        setOrders(response.data.order);
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  // Fetch Food Id
  const fetchFoodId = async (foodId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/Api/food?id=${foodId}`
      );
      if (response && response.data.food) {
        setFoodItemId(response.data.food.name);
      }
    } catch (err) {
      console.error("Error fetching food name:", err);
    }
  };

  // Delete User All Orders
  const deleteAllById = async (userId) => {
    if (userId) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/Api/Orders?userId=${userId}`
        );
        if (response.status === 200) {
          toast.success("All Items Successfully Removed!");
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        } else {
          console.error("Error deleting user's orders:", response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchUserName();
  }, [userId]);

  useEffect(() => {
    fetchFoodId();
  }, []);

  useEffect(() => {
    if (userName) {
      fetchOrder(userName);
    }
  }, [userName]);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  return (
    <div className="mt-20">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Orders List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders ? (
                orders.map((order, index) => (
                  <OrderTableItems
                    key={index}
                    id={order._id}
                    index={index}
                    userName={order.userName}
                    userId={order.userId}
                    foodId={order.foodId}
                  />
                ))
              ) : (
                <p className="my-10">No Orders</p>
              )}
            </tbody>
          </table>
          <div className="flex w-full justify-start mt-5 gap-5">
            <button className="bg-gray-800 text-white py-2 px-5 rounded-md hover:bg-gray-900">
              Order Now
            </button>
            <button
              onClick={() => deleteAllById(userId)}
              className="bg-gray-800 text-white py-2 px-5 rounded-md hover:bg-gray-900"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
