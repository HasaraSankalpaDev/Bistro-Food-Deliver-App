"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

export const FoodCards = ({ foods }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFood, setCurrentFood] = useState(null);

  // Modal handling
  const openModal = (food) => {
    setCurrentFood(food);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentFood(null);
    setIsModalOpen(false);
  };

  // File input handling
  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCurrentFood((prevFood) => ({
        ...prevFood,
        itemImage: file,
        previewImage: imageUrl,
      }));
    }
  };

  // Save changes function
  const handleSaveChanges = async () => {
    try {
      const formData = new FormData();
      formData.append("itemId", currentFood._id);
      formData.append("itemName", currentFood.itemName);
      formData.append("itemPrice", currentFood.itemPrice);
      formData.append("itemDescription", currentFood.itemDescription);
      formData.append("itemCategory", currentFood.itemCategory);

      if (currentFood.itemImage instanceof File) {
        formData.append("itemImage", currentFood.itemImage);
      }

      const response = await axios.put(
        "http://localhost:3000/Api/food",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // Check if response.data exists and has a success key
      if (response.data && response.data.success) {
        toast.success("Food item updated successfully!");
        closeModal();
        window.location.reload(); // Refresh the page to reflect changes
      } else {
        toast.error(response.data?.msg || "Failed to update the food item");
      }
    } catch (err) {
      console.error("Error updating food item:", err);
      toast.error("An error occurred while updating the food item.");
    }
  };

  // Delete Food Item
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/Api/food?id=${id}`
      );
      if (response.data.success) {
        toast.success("Food Item deleted successfully!");
        setTimeout(() => window.location.reload(), 1000);
      } else {
        toast.error(response.data.msg || "Failed to delete the food item");
      }
    } catch (err) {
      console.error("Error deleting food item:", err);
      toast.error("Failed to delete the food item");
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
            <p className="mb-4 text-2xl text-orange-600 font-bold">
              ${food.itemPrice}
            </p>

            <div className="flex justify-between w-full gap-2">
              <button
                onClick={() => openModal(food)}
                className="text-white w-full bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded mb-3"
              >
                Edit
              </button>
            </div>
            <div className="flex justify-between w-full gap-2">
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

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
            <div className="flex w-full justify-between align-middle">
              <h3 className="text-xl font-bold mb-4">Edit Food Item</h3>
              <IoClose
                className="text-2xl cursor-pointer"
                onClick={closeModal}
              />
            </div>

            <label htmlFor="image">
              <img
                src={currentFood.previewImage || currentFood.itemImage}
                width={140}
                height={70}
                alt="Upload thumbnail"
                className="mt-4 cursor-pointer"
              />
            </label>
            <input
              onChange={onFileChange}
              type="file"
              name="image"
              id="image"
              hidden
            />

            <input
              type="text"
              value={currentFood.itemName}
              onChange={(e) =>
                setCurrentFood({ ...currentFood, itemName: e.target.value })
              }
              className="w-full border border-gray-300 p-2 rounded mb-4"
              placeholder="Item Name"
            />
            <input
              type="text"
              value={currentFood.itemDescription}
              onChange={(e) =>
                setCurrentFood({
                  ...currentFood,
                  itemDescription: e.target.value,
                })
              }
              className="w-full border border-gray-300 p-2 rounded mb-4"
              placeholder="Item Description"
            />
            <input
              type="number"
              value={currentFood.itemPrice || ""}
              onChange={(e) =>
                setCurrentFood({
                  ...currentFood,
                  itemPrice: parseFloat(e.target.value) || 0,
                })
              }
              className="w-full border border-gray-300 p-2 rounded mb-4"
              placeholder="Item Price"
            />
            <select
              name="itemCategory"
              className="w-full border border-gray-300 p-2 rounded mb-4"
              onChange={(e) =>
                setCurrentFood({ ...currentFood, itemCategory: e.target.value })
              }
              value={currentFood.itemCategory}
            >
              <option value="">Select a category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Desserts">Desserts</option>
              <option value="Drinks & Tea">Drinks & Tea</option>
              <option value="Wine Card">Wine Card</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
