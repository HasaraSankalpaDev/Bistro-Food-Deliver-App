"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import AdminSideBarLinks from "./AdminSideBarLinks";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex h-screen sticky fixed top-0 left-0 overflow-y-hidden ${
        isCollapsed ? "w-20" : "w-96"
      } duration-300 bg-gray-800 relative  overflow-y-hidden`}
    >
      {/* Sidebar Content */}
      <div className="relative w-full flex flex-col items-center align-middle h-full">
        {/* Sidebar Items */}
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-between p-4 text-white w-full duration-300 mt-5"
        >
          <span
            className={`text-xl font-medium ${
              isCollapsed ? "hidden" : "inline-block"
            } duration-300`}
          >
            Bistro.
          </span>
          <span className="inline-block mr-4 group-hover:scale-110 duration-300">
            {isCollapsed ? (
              <GiHamburgerMenu className="w-[22px] h-[22px]" />
            ) : (
              <GiHamburgerMenu className="w-[22px] h-[22px]" />
            )}
          </span>
        </button>
        {/* Nav Link */}
        <AdminSideBarLinks isCollapsed={isCollapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
