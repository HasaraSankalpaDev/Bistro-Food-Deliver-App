"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SideBar = () => {
  const [menu, setMenu] = useState("profile"); // Set a default value here

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
              {/* <Image src={assets.add_icon} alt="" width={28} /> */}
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
              {/* <Image src={assets.add_icon} alt="" width={28} /> */}
              <p>Cart Items</p>
            </div>
          </Link>

          {/* Orders Link */}
          <Link href="/User/Orders" onClick={() => setMenu("orders")}>
            <div
              className={`flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 text-center rounded-lg mb-5 cursor-pointer transition-all ${
                menu === "orders"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-dark"
              } hover:bg-orange-500 hover:text-white`}
            >
              {/* <Image src={assets.add_icon} alt="" width={28} /> */}
              <p>My Orders</p>
            </div>
          </Link>

          {/* Favorites Link */}
          <Link href="/" onClick={() => setMenu("favorites")}>
            <div
              className={`flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 text-center rounded-lg mb-5 cursor-pointer transition-all ${
                menu === "favorites"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-dark"
              } hover:bg-orange-500 hover:text-white`}
            >
              {/* <Image src={assets.add_icon} alt="" width={28} /> */}
              <p>Favorites</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
