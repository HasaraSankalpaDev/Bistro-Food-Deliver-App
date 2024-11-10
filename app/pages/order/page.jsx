"use client";
import Nav from "@/Components/Components/Client/Nav";
import { MdNoEncryptionGmailerrorred } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { useState, useEffect } from "react";
import Link from "next/link";

const page = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);
  return (
    <div>
      <Nav />

      <div className="mt-30">
        {userId ? (
          <div className="px-5 mt-10 py-20 md:px-12 lg:px-28 text-black ">
            <div className="sing-out-menu bg-orange-200 py-8 px-14 text-center">
              <div className="flex justify-center">
                <LuShoppingCart className="text-[60px]  " />
              </div>
              <h3 className="my-5 text-2xl">Orders Not Found</h3>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate nihil ea beatae, illo earum
              </p>
              <Link
                href="/pages/menu"
                className="border border-orange-600 py-2 text-orange-600 px-8 rounded-md hover:bg-orange-600 hover:text-white transition"
              >
                Buy Now
              </Link>
            </div>
          </div>
        ) : (
          <div className="px-5 mt-10 py-20 md:px-12 lg:px-28 text-black ">
            <div className="sing-out-menu bg-orange-200 py-8 px-14 text-center">
              <div className="flex justify-center">
                <MdNoEncryptionGmailerrorred className="text-[60px]  " />
              </div>
              <h3 className="my-5 text-2xl">
                Please Sign in to place your order.
              </h3>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate nihil ea beatae, illo earum
              </p>
              <button className="border border-orange-600 py-2 text-orange-600 px-8 rounded-md hover:bg-orange-600 hover:text-white transition">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default page;
