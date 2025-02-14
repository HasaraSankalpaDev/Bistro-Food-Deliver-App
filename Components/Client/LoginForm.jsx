import axios from "axios";
import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function LoginForm({ onClose, onOpen }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  // Create UserId Variable
  const saveUserId = (id) => {
    if (id) {
      localStorage.setItem("userId", id);
    }
  };
  const saveAdminId = (id) => {
    if (id) {
      localStorage.setItem("adminId", id);
    }
  };

  // Input Handler
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (data.email === "") {
      toast.error("Email Address is Required!");
    } else if (
      !data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      toast.error("Please Enter a Valid Email!");
    } else {
      if (data.password === "") {
        toast.error("Password is Required!");
      } else if (data.password.length < 8) {
        toast.error("Password Must be at least 8 characters.");
      } else {
        try {
          const response = await axios.post("/Api/login", {
            email: data.email,
            password: data.password,
          });

          if (response) {
            if (response.data.msg === "User_Not_Found") {
              toast.error("User Not Found!");
            } else if (response.data.msg === "Invalid_Credentials") {
              toast.error("Invalid Email or Password!");
            }
            // Handle User
            if (response.data.msg === "User_Found") {
              const uId = response.data.user._id;
              router.push("http://localhost:3000");
              saveUserId(uId);
              window.location.reload();
            }
            // Handle Admin
            if (response.data.msg === "Admin_Found") {
              const uId = response.data.user._id;
              saveAdminId(uId);
              router.push("/Admin/Dashboard");
            }
          }
        } catch (err) {
          console.log("Error:", err);
        }
      }
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
        <div className="bg-white rounded-lg w-6/12 md:w-6/12 relative px-8 py-6">
          <h2 className="text-2xl font-bold mb-6">Log In</h2>
          <form onSubmit={onSubmitHandler}>
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
                  onClick={onOpen}
                  className="text-orange-600 font-bold underline"
                >
                  Sign Up
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
                Log In
              </button>
            </div>
          </form>
          <button
            onClick={onClose}
            className="absolute top-4 right-2 text-gray-600 hover:text-gray-900"
          >
            <RiCloseFill className="mr-5 w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
