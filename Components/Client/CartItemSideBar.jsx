"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const CartItemSideBar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-slate-100 shadow-xl border-4 border-gray-200 z-20 transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        {/* Cart items will go here */}

        <div className="flex w-full justify-between align-middle mt-3">
          <h2 className="text-2xl font-semibold text-orange-600">Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-orange-600"
          >
            <IoCloseSharp className="text-2xl" />
          </button>
        </div>
      </div>
      {/* Additional components for cart items */}
      <div className="p-5 text-xl">
        <p>No Cart Items Available . Please Sign In to Place Items.</p>
      </div>
    </div>
  );
};

export default CartItemSideBar;
