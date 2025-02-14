"use client";
import Nav from "@/Components/Components/Client/Nav";
import "./gallery.css";
import { useEffect, useState } from "react";
import Footer from "@/Components/Components/Client/Footer";

// pages/menu.js
const page = () => {
  const [images, setImages] = useState();

  const galleryImages = [
    "https://plus.unsplash.com/premium_photo-1681406994530-3de7406c21a5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614680108604-c23b65f7e7dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D", // Delicious food dish
    "https://images.unsplash.com/photo-1724805053611-54c999f9c70c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXx4alBSNGhsa0JHQXx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1726376197762-6f1044ab0b88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExN3x4alBSNGhsa0JHQXx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1661366394743-fe30fe478ef7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0Nnx4alBSNGhsa0JHQXx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1725808015035-4d20ffd798b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OXx4alBSNGhsa0JHQXx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1675864534274-3652b78bfff1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5N3x4alBSNGhsa0JHQXx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1717345992254-f1ec84d6814d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyOXx4alBSNGhsa0JHQXx8ZW58MHx8fHx8",
  ];
  return (
    <div>
      <Nav />
      <div className="px-5 mt-10 py-20 md:px-12 lg:px-28 text-black ">
        <h1 className="text-4xl font-semibold mb-5 ">Our Gallery</h1>
        <p className="text-[16px] text-gray-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quis
          est deleniti id iure maiores impedit corrupti neque. Fugiat quidem
          enim laudantium harum fugit aliquam cumque incidunt nam quibusdam!
          Eligendi perspiciatis pariatur est iusto modi soluta numquam eum ea
          ullam.
        </p>

        <div class="image-container mt-12">
          {galleryImages.map((image, index) => (
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="hover:scale-[1.03] transition-all"
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
