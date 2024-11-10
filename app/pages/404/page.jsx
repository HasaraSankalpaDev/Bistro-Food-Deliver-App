import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div className="text-center">
        <h1 className="text-8xl text-orange-600 font-medium">404</h1>
        <p className="text-xl my-4">Not Found</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero</p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default page;
