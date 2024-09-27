import React from "react";
import { RiDrinks2Fill } from "react-icons/ri";

const Menu = () => {
  return (
    <div className="px-5  md:px-12 lg:px-28  bg-white w-full  ">
      <div className="container">
        <div className="menu-header text-center mt-16">
          <h2 className="text-4xl font-medium mb-4 text-center relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-orange-600 after:mt-2 after:mx-auto">
            View Our Menudf
          </h2>

          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="menu-items">
          <div className="bg-gray-300 rounded-full ">
            <RiDrinks2Fill className="text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
