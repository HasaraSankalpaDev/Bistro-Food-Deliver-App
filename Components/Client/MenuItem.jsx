"use client";
import Image from "next/image";
import React from "react";
function MenuItem({ id, name, image, description, category, price }) {
  return (
    <div
      key={id + name}
      className="card bg-gray-200 border shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-102 hover:shadow-2xl relative"
    >
      <div className="px-6 py-0">
        <Image src={image} className="w-full h-full" alt="Chicken Burger" />

        <div className="p-5">
          <div className="flex items-center mb-3">
            {/* Full Stars */}
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.684h4.928c.969 0 1.371 1.24.588 1.81l-3.993 2.901 1.518 4.684c.3.921-.755 1.688-1.54 1.155L10 14.347l-3.972 2.814c-.785.534-1.84-.234-1.54-1.155l1.518-4.684-3.993-2.901c-.783-.57-.38-1.81.588-1.81h4.928l1.518-4.684z"></path>
              </svg>
            ))}
            {/* Half Star */}
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15l-4.62 3.088a.5.5 0 01-.748-.536l1.714-5.284L.5 8.53a.5.5 0 01.288-.88l5.463-.145 1.748-5.245a.5.5 0 01.948 0L10 15z"></path>
            </svg>
            <span className="pl-28">${price}</span>
          </div>
          <h2 className="text-xl font-medium text-gray-800 mb-3">{name}</h2>
          <p className="mb-4">{description}</p>

          <div className="flex w-full h-full align-middle justify-between">
            <button
              href="#"
              className="text-white w-full bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-0 mb-3"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
