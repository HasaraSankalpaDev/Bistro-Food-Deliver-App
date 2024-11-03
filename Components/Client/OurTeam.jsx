import { assets } from "@/Components/Assets/assets";
import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <div className="px-5 mt-10 py-20 md:px-12 lg:px-28 text-black">
      <div className="text-center">
        <h2 className="text-4xl font-medium mb-4 text-center relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-orange-600 after:mt-2 after:mx-auto">
          Our Team
        </h2>
        <p className="py-5 leading-8 text-[16px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* Card 1 */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border-4 border-gray-100">
          <div className="flex w-full align-middle justify-center mt-8">
            <Image
              src={assets.team_01}
              width={150}
              height={150}
              alt="Delivery Service 1"
              className="rounded-full"
            />
          </div>
          <div className="px-6 py-8 text-center">
            <h3 className="text-2xl font-bold text-orange-600">Joe Deo</h3>
            <p className="text-gray-600 mt-3">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="bg-gray-700 py-2 px-2 rounded-lg mt-4 w-full text-white">
              Contact Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border-4 border-gray-100">
          <div className="flex w-full align-middle justify-center mt-8">
            <Image
              src={assets.team_02}
              width={150}
              height={150}
              alt="Delivery Service 2"
              className="rounded-full"
            />
          </div>
          <div className="px-6 py-8 text-center">
            <h3 className="text-2xl font-bold text-orange-600">Joe Deo</h3>
            <p className="text-gray-600 mt-3">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="bg-gray-700 py-2 px-2 rounded-lg mt-4 w-full text-white">
              Contact Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border-4 border-gray-100">
          <div className="flex w-full align-middle justify-center mt-8">
            <Image
              src={assets.team_03}
              width={150}
              height={150}
              alt="Delivery Service 3"
              className="rounded-full"
            />
          </div>
          <div className="px-6 py-8 text-center">
            <h3 className="text-2xl font-bold text-orange-600">Joe Deo</h3>
            <p className="text-gray-600 mt-3">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="bg-gray-700 py-2 px-2 rounded-lg mt-4 w-full text-white">
              Contact Now
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border-4 border-gray-100">
          <div className="flex w-full align-middle justify-center mt-8">
            <Image
              src={assets.team_04}
              width={150}
              height={150}
              alt="Delivery Service 4"
              className="rounded-full"
            />
          </div>
          <div className="px-6 py-8 text-center">
            <h3 className="text-2xl font-bold text-orange-600">Joe Deo</h3>
            <p className="text-gray-600 mt-3">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="bg-gray-700 py-2 px-2 rounded-lg mt-4 w-full text-white">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
