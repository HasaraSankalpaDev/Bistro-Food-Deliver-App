import React from "react";
import { RiCloseLargeFill } from "react-icons/ri";

function LoginForm({ onClose, onOpen }) {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
        <div className="bg-white rounded-lg w-6/12 md:w-6/12 relative px-8 py-6">
          <h2 className="text-2xl font-bold mb-6">Log In</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-3">
                Email Address:
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 p-3"
                placeholder="Enter Email Address"
                required
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
                required
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
            <RiCloseLargeFill className="mr-5 w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
      ;
    </div>
  );
}

export default LoginForm;
