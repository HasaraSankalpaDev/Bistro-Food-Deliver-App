"use client";
import SideBar from "@/Components/Components/User/UserSideBar";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { FiHome } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Layout({ children }) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <SideBar id={id} />
        <div className="flex flex-col w-full ">
          <div className="flex items-center justify-between w-full py-5 max-h-[60px] px-12 bg-gray-300">
            <h3 className="font-medium">Hello User </h3>
            <Link href={`/?id=${id}`} className="flex gap-3">
              {" "}
              <FiHome className="text-xl" />
              Home
            </Link>
          </div>
          <div className="px-8 mt-5">{children}</div>
        </div>
      </div>
    </>
  );
}
