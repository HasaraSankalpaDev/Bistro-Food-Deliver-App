import Link from "next/link";
import React, { useEffect, useState } from "react";
import React, { useState } from "react";

function NavLinks({ navLink, handleNavLinkClick, id }) {
  const [userId, setUserId] = useState(null);

  // Fetch User Id
  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  return (
    <div className="gap-8 space-x-6">
      <Link
        href="/"
        onClick={() => handleNavLinkClick("home")}
        className={
          navLink === "home"
            ? "text-[18px] text-orange-600 cursor-pointer hover:text-orange-500 transition"
            : "text-[18px] text-gray-600 cursor-pointer hover:text-orange-500 transition"
        }
      >
        Home
      </Link>
      <Link
        href="pages/menu"
        onClick={() => handleNavLinkClick("menu")}
        className={
          navLink === "menu"
            ? "text-[18px] text-orange-600 cursor-pointer hover:text-orange-500 transition"
            : "text-[18px] text-gray-600 cursor-pointer hover:text-orange-500 transition"
        }
      >
        Menu
      </Link>
      {userId && (
        <Link
          href="/User/Profile"
          onClick={() => handleNavLinkClick("profile")}
          className={
            navLink === "profile"
              ? "text-[18px] text-orange-600 cursor-pointer hover:text-orange-500 transition"
              : "text-[18px] text-gray-600 cursor-pointer hover:text-orange-500 transition"
          }
        >
          Dashboard
          <span className="text-red-600">*</span>
        </Link>
      )}
      <Link
        href="/pages/gallery"
        onClick={() => handleNavLinkClick("gallery")}
        className={
          navLink === "gallery"
            ? "text-[18px] text-orange-600 cursor-pointer hover:text-orange-500 transition"
            : "text-[18px] text-gray-600 cursor-pointer hover:text-orange-500 transition"
        }
      >
        Gallery
      </Link>
      <Link
        href="/pages/contact"
        onClick={() => handleNavLinkClick("contact")}
        className={
          navLink === "contact"
            ? "text-[18px] text-orange-600 cursor-pointer hover:text-orange-500 transition"
            : "text-[18px] text-gray-600 cursor-pointer hover:text-orange-500 transition"
        }
      >
        Contact Us
      </Link>
    </div>
  );
}

export default NavLinks;
