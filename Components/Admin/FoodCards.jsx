import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

export const FoodCards = ({ foods }) => {
  // Delete Food Item
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/Api/food?id=${id}`
      );
      if (response) {
        toast.success("Food Item deleted successfully!");
        const timer = setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        toast.error(response.data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div key={food._id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={food.itemImage}
              alt={food.itemName}
              className="p-5 mb-3 w-full h-auto"
            />
            <h2 className="text-xl font-medium text-gray-800 mb-3">
              {food.itemName}
            </h2>
            <p className="mb-4">{food.itemDescription}</p>

            <button className="text-white w-full bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded mb-3">
              Order Now <span>${food.itemPrice}</span>
            </button>
            <div className="flex justify-between w-full gap-2">
              <button className="text-white w-full bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded mb-3">
                Edit
              </button>
              <button
                onClick={() => handleDelete(food._id)}
                className="text-white w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded mb-3"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
