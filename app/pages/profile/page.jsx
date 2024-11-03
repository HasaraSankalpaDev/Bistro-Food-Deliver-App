"use client";
import Nav from "@/Components/Components/Client/Nav";
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import UserSideBar from "@/Components/Components/User/UserSideBar";

// pages/menu.js
const page = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);
  return (
    <div>
      <Nav />
      {userId ? (
        <div>
          <UserSideBar />
        </div>
      ) : (
        <div className="px-5 mt-10 py-20 md:px-12 lg:px-28 text-black ">
          <div className="sing-out-menu bg-orange-200 py-8 px-14 text-center">
            <div className="flex justify-center">
              <CgProfile className="text-[60px]  " />
            </div>
            <h3 className="my-5 text-2xl">Please Sign in to View Profile.</h3>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nihil ea beatae, illo earum
            </p>
            <button className="border border-orange-600 py-2 text-orange-600 px-8 rounded-md hover:bg-orange-600 hover:text-white transition">
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default page;
