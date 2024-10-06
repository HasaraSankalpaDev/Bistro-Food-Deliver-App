import Link from "next/link";
import React from "react";

function NavLinks({ navLink, handleNavLinkClick }) {
  return (
    <div className="gap-8 space-x-6">
      {" "}
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
        href="/pages/menu"
        onClick={() => handleNavLinkClick("menu")}
        className={
          navLink === "menu"
            ? "text-[18px] text-orange-600 cursor-pointer hover:text-orange-500 transition"
            : "text-[18px] text-gray-600 cursor-pointer hover:text-orange-500 transition"
        }
      >
        Menu
      </Link>
      <Link
        href="/pages/order"
        onClick={() => handleNavLinkClick("order")}
        className={
          navLink === "order"
            ? "text-[18px] text-orange-600 cursor-pointer hover:text-orange-500 transition"
            : "text-[18px] text-gray-600 cursor-pointer hover:text-orange-500 transition"
        }
      >
        Order
      </Link>
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
