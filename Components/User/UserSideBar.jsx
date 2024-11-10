"use client";
import Link from "next/link";
import React, { useState } from "react";

const SideBar = () => {
  const [menu, setMenu] = useState("profile");
  return (
    <div className="flex flex-col mt-20">
      <div className="w-5 sm:w-80 h-[80vh] py-12 relative border-r-2 border-gray-300">
        <div className="w-[90%] sm:w-[80%] absolute right-0">
          {/* Profile Link */}
          <Link href="/User/Profile" onClick={() => setMenu("profile")}>
            <div
              className={`flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 text-center rounded-lg mb-5 cursor-pointer transition-all ${
                menu === "profile"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-dark"
              } hover:bg-orange-500 hover:text-white`}
            >
              <p>Profile</p>
            </div>
          </Link>

          {/* Cart Items Link */}
          <Link href="/User/CartItems" onClick={() => setMenu("cartItems")}>
            <div
              className={`flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 text-center rounded-lg mb-5 cursor-pointer transition-all ${
                menu === "cartItems"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-dark"
              } hover:bg-orange-500 hover:text-white`}
            >
              <p>Cart Items</p>
            </div>
          </Link>

          <Link href="/User/LogOut" onClick={() => setMenu("logOut")}>
            <div
              className={`flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 text-center rounded-lg mb-5 cursor-pointer transition-all ${
                menu === "logOut"
                  ? "bg-red-500 text-white"
                  : "bg-white border-red-500 border-2 text-dark"
              } hover:bg-red-600 hover:text-white`}
            >
              <p>Log Out</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
