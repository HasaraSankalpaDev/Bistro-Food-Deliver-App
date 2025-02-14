"use client";
import React, { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { toast } from "react-toastify";
import axios from "axios";

const MessageTableItems = () => {
  const [messageBYId, setMessageById] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [messageList, setMessageList] = useState([]);

  // Fetch Messages
  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Api/contact");

      const itemCount = response.data.length;

      console.log("API Response:", response);
      if (Array.isArray(response.data.massage)) {
        setMessageList(response.data.massage);
      } else {
        console.error("Expected an array, received:", response.data);
        setMessageList([]);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setMessageList([]);
    }
  };

  // Handle View Details
  const handleView = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/Api/contact?id=${id}`
      );
      console.log(response);
      setMessageById(response.data.massage);
      openModal();
    } catch (err) {
      console.error("Error viewing user:", err);
    }
  };

  // Delete Message
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/Api/contact?id=${id}`
      );
      console.log(response);
      toast.success("Message deleted successfully!");
      fetchMessages();
    } catch (err) {
      toast.error("Error deleting user:", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <tbody className="text-gray-600 text-sm font-light">
      {messageList.map((message, index) => (
        <tr
          key={message._id}
          className="border-b border-gray-200 hover:bg-gray-100"
        >
          <td className="py-3 px-6">{index + 1}</td>
          <td className="py-3 px-6">{message.name}</td>
          <td className="py-3 px-6">{message.email}</td>
          <td className="py-3 px-6">
            {message.message && message.message.length > 30
              ? `${message.message.substring(0, 30)}...`
              : message.message}
          </td>

          <td className="py-3 px-6 flex space-x-2">
            <button
              onClick={() => handleDelete(message._id)}
              className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => handleView(message._id)}
              className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded"
            >
              View
            </button>
          </td>
        </tr>
      ))}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
          <div className="bg-white rounded-lg w-5/12 md:w-5/12 relative px-8 py-6">
            <h3 className="text-lg font-semibold mb-6 ">
              View Message Details
            </h3>
            <div className="deatails">
              <h3 className="font-medium text-[20px] bg-gray-100 py-3 px-2  mb-4">
                Name :{" "}
                <span className="font-normal text-[16px]">
                  {messageBYId.name}
                </span>
              </h3>
              <h3 className="font-medium text-[20px] bg-gray-100 py-3 px-2 mb-4">
                Email :{" "}
                <span className="font-normal text-[16px]">
                  {messageBYId.email}
                </span>
              </h3>
              <h3 className="font-medium text-[20px] bg-gray-100 py-3 px-2 ">
                Message :{" "}
                <span className="font-normal text-[16px] leading-6">
                  {messageBYId.message}
                </span>
              </h3>
            </div>
            <div className="flex justify-end mt-5">
              <button
                type="button"
                onClick={closeModal}
                className="text-white font-semibold mr-4 bg-red-700 hover:bg-red-800 py-2 px-6 "
              >
                Close
              </button>
            </div>

            <button
              onClick={closeModal}
              className="absolute top-4 right-2 text-gray-600 hover:text-gray-900"
            >
              <RiCloseFill className="mr-5 w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      )}
    </tbody>
  );
};

export default MessageTableItems;
