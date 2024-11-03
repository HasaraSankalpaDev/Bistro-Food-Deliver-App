"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SideBar = () => {
  const [menu, setMenu] = useState("profile");
  console.log(menu);
  return (
    <div className="flex flex-col mt-20">
      <div className="w-5 sm:w-80 h-[80vh] py-12 relative border-r-2 border-gray-300">
        <div className="w-[90%] sm:w-[80%] absolute right-0 ">
          <Link
            href="/User/Profile"
            className={
              menu === "profile"
                ? "flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 bg-orange-500 text-white text-center rounded-lg mb-5"
                : "flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 bg-white text-dark text-center rounded-lg mb-5"
            }
            onClick={() => setMenu("profile")}
          >
            {/* <Image src={assets.add_icon} alt="" width={28} /> */}
            <p>Profile</p>
          </Link>
          <Link
            href="/User/Orders"
            className={
              menu === "orders"
                ? "flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 bg-orange-500 text-white text-center rounded-lg mb-5"
                : "flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 bg-white text-dark text-center rounded-lg mb-5"
            }
            onClick={() => setMenu("orders")}
          >
            {/* <Image src={assets.add_icon} alt="" width={28} /> */}
            <p>My Orders</p>
          </Link>
          <Link
            href="/User/CartItems"
            className={
              menu === "cartItems"
                ? "flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 bg-orange-500 text-white text-center rounded-lg mb-5"
                : "flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 bg-white text-dark text-center rounded-lg mb-5"
            }
            onClick={() => setMenu("cartItems")}
          >
            {/* <Image src={assets.add_icon} alt="" width={28} /> */}
            <p>Cart Items</p>
          </Link>
          <Link
            href="/"
            className={
              menu === "favorites"
                ? "flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 bg-orange-500 text-white text-center rounded-lg mb-5"
                : "flex items-center justify-center gap-3 font-medium px-3 py-2 mr-5 bg-white text-dark text-center rounded-lg mb-5"
            }
            onClick={() => setMenu("favorites")}
          >
            {/* <Image src={assets.add_icon} alt="" width={28} /> */}
            <p>Favorites</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
