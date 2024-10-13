"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { SiBitcoincash } from "react-icons/si";
import { FiLogOut } from "react-icons/fi";

const Sidebar = ({ id }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex h-screen ${
        isCollapsed ? "w-20" : "w-96"
      } duration-300 bg-gray-800 relative`}
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
        <ul className="mt-12 w-full">
          <li className="group w-full my-8">
            <Link
              href={`/User?${id}`}
              className="flex items-center p-4 text-white hover:bg-gray-700 w-full duration-300"
            >
              <span className="inline-block mr-4 scale-125 group-hover:scale-110 duration-300">
                <FiHome />
              </span>
              <span
                className={`text-sm font-medium ${
                  isCollapsed ? "hidden" : "inline-block"
                } duration-300`}
              >
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={`/User/MyOrders`}
              className="flex items-center p-4 text-white hover:bg-gray-700 w-full duration-300"
            >
              <span className="inline-block mr-4 scale-125 group-hover:scale-110 duration-300">
                <FiHome />
              </span>
              <span
                className={`text-sm font-medium ${
                  isCollapsed ? "hidden" : "inline-block"
                } duration-300`}
              >
                My Orders
              </span>
            </Link>
          </li>

          <li className="group w-full my-8 bottom-0 absolute">
            <Link
              href="/dashboard"
              className="flex items-center p-4 text-white hover:bg-gray-700 w-full duration-300"
            >
              <span className="inline-block mr-4 scale-125 group-hover:scale-110 duration-300">
                <FiLogOut />
              </span>
              <span
                className={`text-sm font-medium ${
                  isCollapsed ? "hidden" : "inline-block"
                } duration-300`}
              >
                Log Out
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
