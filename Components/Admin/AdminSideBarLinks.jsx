import React from "react";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { SiBitcoincash } from "react-icons/si";
import { FiLogOut } from "react-icons/fi";
import { MdAddTask } from "react-icons/md";
import { BiMessageAltCheck } from "react-icons/bi";

const AdminSideBarLinks = ({ isCollapsed }) => {
  return (
    <ul className="mt-12 w-full">
      <li className="group w-full my-8">
        <Link
          href="/Admin/Dashboard"
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
      <li className="group w-full my-8">
        <Link
          href="/Admin/Users"
          className="flex items-center p-4 text-white hover:bg-gray-700 w-full duration-300"
        >
          <span className="inline-block mr-4 scale-125 group-hover:scale-110 duration-300">
            <FaRegUser />
          </span>
          <span
            className={`text-sm font-medium ${
              isCollapsed ? "hidden" : "inline-block"
            } duration-300`}
          >
            Users
          </span>
        </Link>
      </li>
      <li className="group w-full my-8">
        <Link
          href="/Admin/Foods"
          className="flex items-center p-4 text-white hover:bg-gray-700 w-full duration-300"
        >
          <span className="inline-block mr-4 scale-125 group-hover:scale-110 duration-300">
            <IoFastFoodOutline />
          </span>
          <span
            className={`text-sm font-medium ${
              isCollapsed ? "hidden" : "inline-block"
            } duration-300`}
          >
            Fooods
          </span>
        </Link>
      </li>
      <li className="group w-full my-8">
        <Link
          href="/Admin/AddFood"
          className="flex items-center p-4 text-white hover:bg-gray-700 w-full duration-300"
        >
          <span className="inline-block mr-4 scale-125 group-hover:scale-110 duration-300">
            <MdAddTask />
          </span>
          <span
            className={`text-sm font-medium ${
              isCollapsed ? "hidden" : "inline-block"
            } duration-300`}
          >
            Add Food
          </span>
        </Link>
      </li>
      <li className="group w-full my-8">
        <Link
          href="/Admin/ContactMessages"
          className="flex items-center p-4 text-white hover:bg-gray-700 w-full duration-300"
        >
          <span className="inline-block mr-4 scale-125 group-hover:scale-110 duration-300">
            <BiMessageAltCheck />
          </span>
          <span
            className={`text-sm font-medium ${
              isCollapsed ? "hidden" : "inline-block"
            } duration-300`}
          >
            Messages
          </span>
        </Link>
      </li>
      <li className="group w-full my-8">
        <Link
          href="/Admin/Economy"
          className="flex items-center p-4 text-white hover:bg-gray-700 w-full duration-300"
        >
          <span className="inline-block mr-4 scale-125 group-hover:scale-110 duration-300">
            <SiBitcoincash />
          </span>
          <span
            className={`text-sm font-medium ${
              isCollapsed ? "hidden" : "inline-block"
            } duration-300`}
          >
            Economy
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
  );
};

export default AdminSideBarLinks;
