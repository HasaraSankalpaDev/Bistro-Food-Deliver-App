import { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // OnChange Handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handler
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const response = await axios.post("http://localhost:3000/Api/contact", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      if (response) {
        toast.success("Message Sended Successfully!");
      }
      console.log("Success:", response.data);
    } catch (error) {
      toast.error("Error Occurred, Please Try Again Later");
    }
  };
  return (
    <form className="w-full flex justify-center  flex-col " onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        className="w-full flex justify-center sm:w-[500px] mt-4 px-8 py-4 border-0 outline-none bg-gray-200 rounded-md"
        value={data.name}
        onChange={onChangeHandler}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email Address"
        className="w-full sm:w-[500px] mt-4 px-8 py-4 border-0 outline-none bg-gray-200 rounded-md"
        value={data.email}
        onChange={onChangeHandler}
        required
      />
      <textarea
        rows={5}
        placeholder="Enter Your Message"
        className="w-full sm:w-[500px] mt-4 px-8 py-4 border-0 outline-none bg-gray-200 rounded-md"
        value={data.message}
        name="message"
        onChange={onChangeHandler}
        minLength={12}
        required
      />
      <button className="mt-6 w-full sm:w-[500px] py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-200">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
