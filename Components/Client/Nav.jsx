"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiCloseLargeFill } from "react-icons/ri";

const Nav = () => {
  const [signUpModel, setSignUpModel] = useState(false);
  const [loginModel, setLoginModel] = useState(false);

  const handleLoginModel = () => {
    setLoginModel(true);
    setSignUpModel(false);
  };

  const handleOpenModal = () => {
    setSignUpModel(true);
    setLoginModel(false);
  };

  const handleCloseModal = () => {
    setSignUpModel(false);
    setLoginModel(false);
  };

  return (
    <div className="fixed top-0 w-full bg-white z-10 px-5 py-4 md:px-12 lg:px-28 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h3 className="text-3xl font-semibold text-orange-600">Bisto.</h3>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" passHref>
            <li className="list-none text-[18px] text-orange-600 cursor-pointer hover:text-orange-500 transition">
              Home
            </li>
          </Link>
          <Link href="/" passHref>
            <li className="list-none text-[18px] cursor-pointer hover:text-orange-500 transition">
              Menu
            </li>
          </Link>
          <Link href="/" passHref>
            <li className="list-none text-[18px] cursor-pointer hover:text-orange-500 transition">
              Services
            </li>
          </Link>
          <Link href="/" passHref>
            <li className="list-none text-[18px] cursor-pointer hover:text-orange-500 transition">
              Order
            </li>
          </Link>
          <Link href="/" passHref>
            <li className="list-none text-[18px] cursor-pointer hover:text-orange-500 transition">
              Contact Us
            </li>
          </Link>
        </div>

        {/* Icons and Sign In Button */}
        <div className="flex items-center space-x-6">
          <FaSearch className="text-2xl cursor-pointer hover:text-orange-500 transition" />
          <FiShoppingCart className="text-2xl cursor-pointer hover:text-orange-500 transition" />
          <button
            onClick={handleOpenModal}
            className="hidden sm:flex items-center font-medium py-2 px-6 border border-transparent bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Sign Up Modal */}
      {signUpModel && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
          <div className="bg-white rounded-lg w-6/12 md:w-6/12 relative px-8 py-6">
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-3">
                  Your Name:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300  p-3"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-3">
                  Email Address:
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300  p-3"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-3">
                  Password:
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300  p-3"
                  placeholder="Enter Your Password"
                  required
                />
              </div>

              <div className="login-text">
                <p className="font-medium">
                  Don't Have Account?{" "}
                  <a
                    href="#"
                    onClick={handleLoginModel}
                    className="text-orange-600 font-bold underline"
                  >
                    Log In
                  </a>
                </p>
              </div>

              <div className="flex justify-end mt-5">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-gray-900 font-semibold mr-4"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-2 text-gray-600 hover:text-gray-900"
            >
              <RiCloseLargeFill className="mr-5 w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {loginModel && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
          <div className="bg-white rounded-lg w-6/12 md:w-6/12 relative px-8 py-6">
            <h2 className="text-2xl font-bold mb-6">Log Up</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-3">
                  Email Address:
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300  p-3"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-3">
                  Password:
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300  p-3"
                  placeholder="Enter Your Password"
                  required
                />
              </div>

              <div className="login-text">
                <p className="font-medium">
                  Allready Have An Account?{" "}
                  <a
                    href="#"
                    onClick={handleOpenModal}
                    className="text-orange-600 font-bold underline"
                  >
                    Sign Up
                  </a>
                </p>
              </div>

              <div className="flex justify-end mt-5">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-gray-900 font-semibold mr-4"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
                >
                  Log In
                </button>
              </div>
            </form>
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-2 text-gray-600 hover:text-gray-900"
            >
              <RiCloseLargeFill className="mr-5 w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
