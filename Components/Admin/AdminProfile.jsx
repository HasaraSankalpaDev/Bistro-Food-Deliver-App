import axios from "axios";
import React, { use, useEffect, useState } from "react";

const UserProfile = ({ id }) => {
  // User Data
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Fetch User's Data
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/Api/Users?id=${id}`
      );
      if (response) {
        setName(response.data.user.name);
        setEmail(response.data.user.email);
        setPassword(response.data.user.password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <div className="bg-gray-100 my-10  px-8 py-8 rounded-lg shadow-lg ">
        <h1 className="text-2xl font-bold border-b border-gray-300 pb-3 mb-4 text-gray-700">
          Hello {name}
        </h1>
        <div className="text-lg text-gray-600">
          {/* Add other data fields like email, phone, etc. */}
          <p className="mb-2">
            <span className="font-semibold">Email:</span> johndoe@example.com
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> +1 (555) 123-4567
          </p>
          <p>
            <span className="font-semibold">Location:</span> San Francisco, CA
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
