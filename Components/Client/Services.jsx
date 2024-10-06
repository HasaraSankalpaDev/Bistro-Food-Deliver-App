import { assets } from "@/Components/Assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="px-5 mt-10 py-20 md:px-12 lg:px-28 text-black">
      <div className="text-center">
        <h2 className="text-4xl font-medium mb-4 text-center relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-orange-600 after:mt-2 after:mx-auto">
          Services We Provide
        </h2>
        <p className="py-5 leading-8 text-[16px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Card 1 */}
        <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden">
          <div className="flex w-full align-middle justify-center mt-8">
            <Image
              src={assets.dilivery_01}
              width={100}
              height={100}
              alt="Delivery Service 1"
            />
          </div>
          <div className="px-6 py-8 text-center">
            <h3 className="text-2xl font-medium">Fast Delivery</h3>
            <p className="text-gray-600 mt-3">
              Get your products delivered swiftly and safely to your doorstep.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden">
          <div className="flex w-full align-middle justify-center mt-8">
            <Image
              src={assets.dilivery_02}
              width={100}
              height={100}
              alt="Delivery Service 2"
            />
          </div>
          <div className="px-6 py-8 text-center">
            <h3 className="text-2xl font-medium">Reliable Service</h3>
            <p className="text-gray-600 mt-3">
              Our team ensures that your orders are handled with care and
              precision.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden">
          <div className="flex w-full align-middle justify-center mt-8">
            <Image
              src={assets.dilivery_03}
              width={100}
              height={100}
              alt="Delivery Service 3"
            />
          </div>
          <div className="px-6 py-8 text-center">
            <h3 className="text-2xl font-medium">24/7 Support</h3>
            <p className="text-gray-600 mt-3">
              Our customer support team is here to assist you around the clock.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
