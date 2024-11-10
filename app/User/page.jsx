"use client"; // Make sure it's a client component

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  return (
    <div>
      <p className="mt-36">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
        ducimus ipsum placeat enim ad minus totam, natus ea autem cum maxime
        illo nemo qui eveniet magnam, dolores voluptates optio iusto labore
        provident aspernatur. Quam laboriosam sapiente earum voluptatum,
        voluptates at.
      </p>
    </div>
  );
};

export default Page;
