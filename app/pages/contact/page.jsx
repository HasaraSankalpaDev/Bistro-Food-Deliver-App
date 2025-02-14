"use client";
import Nav from "@/Components/Components/Client/Nav";
import Footer from "@/Components/Components/Client/Footer";
import ContactForm from "@/Components/Components/Client/ContactForm";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { PiBroadcastBold } from "react-icons/pi";
import { FaDirections } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  return (
    <div>
      <Nav />
      <ToastContainer theme="dark" />

      <div className="px-5 mt-10 py-20 md:px-12 lg:px-28 text-black ">
        <h1 className="text-4xl font-semibold mb-5 ">Contact Us</h1>
        <p className="text-[16px] text-gray-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quis
          est deleniti id iure maiores impedit corrupti neque. Fugiat quidem
          enim laudantium harum fugit aliquam cumque incidunt nam quibusdam!
          Eligendi perspiciatis pariatur est iusto modi soluta numquam eum ea
          ullam.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex justify-start gap-4 align-middle w-full  mt-5">
              <div className="bg-gray-800 hover:bg-gray-900  hover:cursor-pointer transition-all p-3 rounded-md">
                <MdLocationPin className="text-white text-2xl" />
              </div>
              <div className="bg-gray-800 hover:bg-gray-900 hover:cursor-pointer  transition-all p-3 rounded-md">
                <MdOutlineWifiCalling3 className="text-white text-2xl" />
              </div>
              <div className="bg-gray-800 hover:bg-gray-900 hover:cursor-pointer  transition-all p-3 rounded-md">
                <PiBroadcastBold className="text-white text-2xl" />
              </div>
              <div className="bg-gray-800 hover:bg-gray-900 hover:cursor-pointer  transition-all p-3 rounded-md">
                <FaDirections className="text-white text-2xl" />
              </div>
            </div>
            <ContactForm />
          </div>
          <div className="">
            {" "}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169196.67590840393!2d150.6517813659991!3d-33.847927036625356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b0d1f408e4b7%3A0x5017d681632c850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2slk!4v1696581509406!5m2!1sen!2slk"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="true"
              tabindex="0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
