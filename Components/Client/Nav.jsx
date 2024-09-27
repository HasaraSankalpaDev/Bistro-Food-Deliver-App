import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  return (
    <div className="fixed top-0 w-full bg-white z-10 px-5 py-4 md:px-12 lg:px-28 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h3 className="text-3xl font-semibold text-orange-600">Bisto.</h3>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <li className="list-none text-[18px] text-orange-600 cursor-pointer hover:text-orange-500 transition">
            Home
          </li>
          <li className="list-none text-[18px] cursor-pointer hover:text-orange-500 transition">
            Menu
          </li>
          <li className="list-none text-[18px] cursor-pointer hover:text-orange-500 transition">
            About Us
          </li>
          <li className="list-none text-[18px] cursor-pointer hover:text-orange-500 transition">
            Order
          </li>
          <li className="list-none text-[18px] cursor-pointer hover:text-orange-500 transition">
            Contact Us
          </li>
        </div>

        {/* Icons and Sign In Button */}
        <div className="flex items-center space-x-6">
          <FaSearch className="text-2xl cursor-pointer hover:text-orange-500 transition" />
          <FiShoppingCart className="text-2xl cursor-pointer hover:text-orange-500 transition" />
          <button className="hidden sm:flex items-center font-medium py-2 px-6 border border-transparent bg-orange-600 text-white rounded-full hover:bg-orange-700 transition">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
