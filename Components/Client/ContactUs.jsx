import React from "react";

const ContactUs = () => {
  return (
    <div className="px-5 mt-10 py-20 md:px-12 lg:px-28 text-black">
      <div className="text-center">
        <h2 className="text-4xl font-medium mb-4 text-center relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-orange-600 after:mt-2 after:mx-auto">
          Contact Us
        </h2>
        <p className="py-5 leading-8 text-[16px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <form className="w-full flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-full sm:w-[500px] mt-4 px-8 py-4 border-0 outline-none bg-gray-200 rounded-md"
        />
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="w-full sm:w-[500px] mt-4 px-8 py-4 border-0 outline-none bg-gray-200 rounded-md"
        />
        <textarea
          rows={5}
          placeholder="Enter Your Message"
          className="w-full sm:w-[500px] mt-4 px-8 py-4 border-0 outline-none bg-gray-200 rounded-md"
        />
        <button
          type="submit"
          className="mt-6 w-full sm:w-[500px] py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
