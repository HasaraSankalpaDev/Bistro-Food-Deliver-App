"use client";
import AdminOrderTable from "@/Components/Components/Admin/AdminOrderTable";
import axios from "axios";
import React, { useEffect, useState } from "react";

function page() {
  const [orders, setOrders] = useState([]);

  // Fetching Orders
  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Api/Orders");
      setOrders(response.data.orders);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Users List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-start">ID</th>
                <th className="py-3 px-6 text-center">User</th>
                <th className="py-3 px-6 text-start">Food Name</th>
                <th className="py-3 px-6 text-center">Quantity</th>
                <th className="py-3 px-6 text-start">Date</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <AdminOrderTable
                  id={order._id}
                  index={index}
                  userId={order.userId}
                  userName={order.userName}
                  foodId={order.foodId}
                  quantity={order.itemCount}
                  date={order.date}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
