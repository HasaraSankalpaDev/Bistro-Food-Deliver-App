"use client";
import React, { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import axios from "axios";
import OrderCard from "@/Components/Components/User/OrderCard";
import { useSearchParams, useRouter } from "next/navigation";

const Page = () => {
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Retrieve the query parameters
  const order = searchParams.get("order");
  const userName = searchParams.get("userName");
  const total = searchParams.get("total");

  // Fetch Order
  const fetchOrder = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/Api/Orders?userName=${userName}`
      );
      setOrders(response.data.order);
      console.log(response);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  useEffect(() => {
    if (userName) {
      fetchOrder();
    }
  }, [userName]);

  return (
    <div className="mt-20">
      {order === "true" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4">
            <h2 className="text-xl font-medium mb-5">Your Orders </h2>
            {orders.length ? (
              orders.map((order, index) => (
                <OrderCard
                  key={index}
                  foodId={order.foodId}
                  quantity={order.itemCount}
                />
              ))
            ) : (
              <p className="my-10">No Orders</p>
            )}
            <div className="mt-5">
              <p className="text-xl font-medium">Total : ${total}</p>
            </div>
          </div>
          <div className="bg-white p-8 w-full shadow-xl rounded-lg">
            <h2 className="text-xl font-medium mb-5">Your Order Details</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
              </div>
              {/* Add the rest of your form fields here */}
            </form>
          </div>
        </div>
      ) : (
        <div className="px-5 mt-10 py-20 md:px-12 lg:px-28 text-black">
          <div className="sing-out-menu bg-orange-200 py-8 px-14 text-center">
            <div className="flex justify-center">
              <LuShoppingCart className="text-[60px]" />
            </div>
            <h3 className="my-5 text-2xl">Orders Not Supported!</h3>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nihil ea beatae, illo earum.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
