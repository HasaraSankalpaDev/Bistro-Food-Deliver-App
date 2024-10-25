import Sidebar from "@/Components/Components/Admin/AdminSideBar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <ToastContainer theme="dark" />
        <div className="flex flex-col w-full ">
          <div className="flex items-center justify-between w-full py-5 max-h-[60px] px-12 bg-gray-300">
            <h3 className="font-medium">Admin Panel</h3>
          </div>
          <div className="px-8 mt-5 overflow-y-scroll">{children}</div>
        </div>
      </div>
    </>
  );
}
