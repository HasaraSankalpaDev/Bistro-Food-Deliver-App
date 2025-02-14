import React from "react";
import "./ClientComponents.css";

const Header = () => {
  return (
    <header className="mt-20 px-5 py-40 pt-6 md:px-12 lg:px-28 header">
      <div className="container">
        <div className="header-content w-full text-center mt-24">
          <h1 className="header-heading text-white text-8xl capitalize mt-5 mb-5">
            <span className="text-orange-600">Fresh & Healthy Foods</span>
          </h1>
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-300 mb-5 text-lg w-[60%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis ipsum enim rem ut. Eum vel repellat hic expedita quod
              reprehenderit eligendi voluptatum officia sequi.
            </p>
            <button className="font-medium py-4 px-10 sm:py-2 sm:px-8 border border-transparent bg-orange-600 text-white hover:bg-orange-700 transition duration-200 mt-5">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
