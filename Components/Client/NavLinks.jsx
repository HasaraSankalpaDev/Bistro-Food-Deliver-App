import Link from "next/link";
import React from "react";

function NavLinks({ navLink, handleNavLinkClick, id }) {
  return (
    <div className="gap-8 space-x-6">
      {" "}
      <Link
        href={`/?${id}`}
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
        href={`/pages/menu?${id}`}
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
        href={`/pages/order?${id}`}
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
        href={`/pages/gallery?${id}`}
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
        href={`/pages/contact?${id}`}
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
