"use client";
import { FoodCards } from "@/Components/Components/Admin/FoodCards";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Page() {
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Api/food");
      console.log("API Response:", response.data.foods);
      setFoods(response.data.foods);
    } catch (error) {
      toast.error("Failed to fetch foods. Please try again later.");
      console.error("Error fetching foods:", error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div>
      {/* {foods.length > 0 ? (
        foods.map((food, index) => (
          <FoodCards
            key={index}
            itemName={food.itemName}
            itemPrice={food.itemPrice}
            itemDescription={food.itemDescription}
            itemCategory={food.itemCategory}
            itemImage={food.itemImage}
          />
        ))
      ) : (
        <p>No foods available</p>
      )} */}
      <FoodCards foods={foods} />
    </div>
  );
}

export default Page;
