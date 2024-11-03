"use client";
import SideBar from "@/Components/Components/User/UserSideBar";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { FiHome } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Nav from "@/Components/Components/Client/Nav";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Nav />
        <ToastContainer theme="dark" />
        <SideBar />
        <div className="px-8 mt-5">{children}</div>
      </div>
    </>
  );
}
