"use client";
import SideBar from "@/Components/Components/User/UserSideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "@/Components/Components/Client/Nav";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex w-full">
        <Nav />
        <ToastContainer theme="dark" />
        <SideBar />
        <div className="flex-grow px-8 mt-5">{children}</div>
      </div>
    </>
  );
}
