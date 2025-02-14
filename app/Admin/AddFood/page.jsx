"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  // State Handle
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    itemName: "",
    itemPrice: "",
    itemDescription: "",
    itemCategory: "",
    itemImage: "",
  });
  const [adminId, setAdminId] = useState();

  // Input Handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Image Handler
  const onFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // Submit Handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("itemName", data.itemName);
    formData.append("itemPrice", data.itemPrice);
    formData.append("itemDescription", data.itemDescription);
    formData.append("itemCategory", data.itemCategory);
    formData.append("itemImage", image);

    // Sending API
    const response = await axios.post(
      "http://localhost:3000/Api/food",
      formData
    );

    if (response.data.success) {
      toast.success("Food Item Saved Succesfully !");
      setData({
        itemName: "",
        itemPrice: "",
        itemDescription: "",
        itemCategory: "",
        itemImage: "",
      });
    } else {
      toast.success(response.data.msg);
    }
  };
  useEffect(() => {
    const id = localStorage.getItem("adminId");
    setAdminId(id);
  }, []);

  return (
    <div>
      <div className="mt-4">
        <h2 className="text-2xl font-medium">Add Food Item</h2>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          doloremque ipsam sapiente.
        </p>
      </div>
      <div className="w-1/2 mt-5">
        <form onSubmit={onSubmitHandler}>
          <div className="my-4">
            <label htmlFor="itemName">Item Name</label>
            <input
              type="text"
              name="itemName"
              className="bg-gray-100 py-3 px-4 mt-3 w-full"
              placeholder="Enter Food Item Name"
              onChange={onChangeHandler}
              value={data.itemName}
            />
          </div>
          <div className="my-4">
            <label htmlFor="itemDescription">Item Description</label>
            <textarea
              rows={3}
              name="itemDescription"
              className="bg-gray-100 py-3 px-4 mt-3 w-full border-none"
              placeholder="Enter Food Item Description"
              onChange={onChangeHandler}
              value={data.itemDescription}
            />
          </div>
          <div className="my-4">
            <label htmlFor="itemPrice">Item Price</label>
            <div className="flex items-center bg-gray-100 mt-3 px-4 w-full">
              <span className="text-gray-700 mr-2">$</span>
              <input
                type="number"
                name="itemPrice"
                className="bg-gray-100 flex-grow py-3 px-4 w-full border-none"
                placeholder="Enter Price"
                min="0"
                step="0.01"
                onChange={onChangeHandler}
                value={data.itemPrice}
              />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="itemImage">Item Image</label>
            <input
              type="file"
              name="itemImage"
              className="py-3 px-4 bg-gray-100  w-full mt-3"
              onChange={onFileChange}
            />
          </div>
          <label htmlFor="itemCategory">Item Category</label>
          <div className="">
            <select
              name="itemCategory"
              className="mt-4 px-4 py-3 border bg-gray-100 w-1/2"
              onChange={onChangeHandler}
              value={data.itemCategory}
            >
              <option value="">Select a category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Desserts">Desserts</option>
              <option value="Drinks & Tea">Drinks & Tea</option>
              <option value="Wine Card">Wine Card</option>
            </select>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-black text-white hover:shadow-lg"
            >
              Add Food Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
