import axios from "axios";
import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { toast } from "react-toastify";

function SignUpForm({ onClose, onLoginOpen }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    type: "user",
  });

  // OnChange Handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handler
  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate Name
    if (data.name === "") {
      toast.error("Name is Required!");
    } else {
      // Validate Email
      if (data.email === "") {
        toast.error("Email Address is Required!");
      } else if (
        !data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        toast.error("Please Enter a Valid Email!");
      } else {
        // Validate Password
        if (data.password === "") {
          toast.error("Password is Required!");
        } else if (data.password.length < 8) {
          toast.error("Password Must be at least 8 characters.");
        } else {
          // User Registration Logic
          try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("type", data.type);

            const response = await axios.post("/Api/register", formData); // Check API path

            if (response.data.msg === "User_Already_Exist") {
              toast.error("User Already Exist, User Another Email Address!");
            } else if (response.data.msg === "User_Registered") {
              onLoginOpen(true);
            } else {
              toast.error("404 Error. Try Again Later!");
            }
          } catch (error) {
            console.error(
              "Error:",
              error.response ? error.response.data : error.message
            );
          }
        }
      }
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
        <div className="bg-white rounded-lg w-6/12 md:w-6/12 relative px-8 py-6">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-3">
                Your Name:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3"
                placeholder="Enter Name"
                onChange={onChangeHandler}
                value={data.name}
                name="name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-3">
                Email Address:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3"
                placeholder="Enter Email Address"
                onChange={onChangeHandler}
                name="email"
                value={data.email}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-3">
                Password:
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 p-3"
                placeholder="Enter Your Password"
                onChange={onChangeHandler}
                name="password"
                value={data.password}
              />
            </div>

            <div className="login-text">
              <p className="font-medium">
                Already Have An Account?{" "}
                <a
                  href="#"
                  onClick={onLoginOpen}
                  className="text-orange-600 font-bold underline"
                >
                  Log In
                </a>
              </p>
            </div>

            <div className="flex justify-end mt-5">
              <button
                type="button"
                onClick={onClose}
                className="text-gray-900 font-semibold mr-4"
              >
                Close
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
              >
                Sign Up
              </button>
            </div>
          </form>
          <button
            onClick={onClose}
            className="absolute top-4 right-2 text-gray-600 hover:text-gray-900"
          >
            <RiCloseFill className="mr-5 w-[20px] h-[20px]" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
