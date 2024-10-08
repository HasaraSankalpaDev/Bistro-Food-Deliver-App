import ContactUs from "@/Components/Components/Client/ContactUs";
import Nav from "@/Components/Components/Client/Nav";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { PiBroadcastBold } from "react-icons/pi";
import { FaDirections } from "react-icons/fa";
import Footer from "@/Components/Components/Client/Footer";

// pages/menu.js
const page = () => {
  return (
    <div>
      <Nav />
      <div className="px-5 mt-10 py-20 md:px-12 lg:px-28 text-black ">
        <h1 className="text-4xl font-semibold mb-5 ">Contact Us</h1>
        <p className="text-[16px] text-gray-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quis
          est deleniti id iure maiores impedit corrupti neque. Fugiat quidem
          enim laudantium harum fugit aliquam cumque incidunt nam quibusdam!
          Eligendi perspiciatis pariatur est iusto modi soluta numquam eum ea
          ullam.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <form className="w-full flex flex-col items- my-10">
              <div className="flex justify-start gap-4 align-middle w-full mb-5">
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
          <div class="">
            {" "}
            <iframe
              class="w-full h-full rounded-lg"
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
