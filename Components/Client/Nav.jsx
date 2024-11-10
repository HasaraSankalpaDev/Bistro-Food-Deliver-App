"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import NavLinks from "./NavLinks";
import Image from "next/image";
import CartItemSideBar from "./CartItemSideBar";
import { assets } from "@/Components/Assets/assets";

const Nav = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [signUpModel, setSignUpModel] = useState(false);
  const [loginModel, setLoginModel] = useState(false);
  const [navLink, setNavLink] = useState("home");
  const [userId, setUserId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const goToCartPage = () => {
    window.location.href = "      http://localhost:3000/User/CartItems";
  };

  // SideBar Toggle
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleNavLinkClick = (link) => {
    if (navLink !== link) {
      setNavLink(link);
    }
  };

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

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Hide dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (
      !event.target.closest("#dropdownImage") &&
      !event.target.closest("#dropdownMenu")
    ) {
      setIsDropdownVisible(false);
    }
  };

  // Listen for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Fetch User Id
  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  return (
    <div className="fixed top-0 w-full bg-white z-10 px-5 py-4 md:px-12 lg:px-28 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          {/* <h3 className="text-3xl font-semibold text-orange-600">Bisto.</h3> */}
          <Image src={assets.logo} width={140} height={100} alt="sds" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center ">
          <NavLinks navLink={navLink} handleNavLinkClick={handleNavLinkClick} />
        </div>

        {/* Icons and Sign In Button */}
        <div className="flex items-center space-x-6">
          <FaSearch className="text-2xl cursor-pointer hover:text-orange-500 transition" />

          {userId ? (
            <FiShoppingCart
              onClick={goToCartPage}
              className="text-2xl cursor-pointer hover:text-orange-500 transition"
            />
          ) : (
            <FiShoppingCart
              onClick={toggleSidebar}
              className="text-2xl cursor-pointer hover:text-orange-500 transition"
            />
          )}

          {userId ? (
            <button></button>
          ) : (
            <button
              onClick={handleOpenModal}
              className="hidden sm:flex items-center font-medium py-2 px-6 border border-transparent bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
            >
              Sign Up
            </button>
          )}

          {userId && (
            <div className="relative">
              <div
                onClick={toggleDropdown}
                className=" hover:cursor-pointer"
                id="dropdownImage"
              >
                {" "}
                <div className="flex gap-3 bg-orange-600 text-white py-2 px-2 rounded-full">
                  <CgProfile className="text-3xl" />
                </div>
              </div>

              {isDropdownVisible && (
                <div
                  id="dropdownMenu"
                  className="absolute -right-6 mt-8 w-48 bg-slate-100 rounded-md shadow-lg py-2 z-10"
                >
                  <Link
                    href="/User/Profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="../User/LogOut/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200"
                  >
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Sidebar Component */}
      <CartItemSideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Sign Up Modal */}
      {signUpModel && (
        <SignUpForm onClose={handleCloseModal} onLoginOpen={handleLoginModel} />
      )}

      {/* Log In Modal */}
      {loginModel && (
        <LoginForm onClose={handleCloseModal} onOpen={handleOpenModal} />
      )}
    </div>
  );
};

export default Nav;
