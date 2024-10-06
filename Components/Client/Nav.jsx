"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [signUpModel, setSignUpModel] = useState(false);
  const [loginModel, setLoginModel] = useState(false);
  const [navLink, setNavLink] = useState("home");

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

  return (
    <div className="fixed top-0 w-full bg-white z-10 px-5 py-4 md:px-12 lg:px-28 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h3 className="text-3xl font-semibold text-orange-600">Bisto.</h3>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks navLink={navLink} handleNavLinkClick={handleNavLinkClick} />
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
