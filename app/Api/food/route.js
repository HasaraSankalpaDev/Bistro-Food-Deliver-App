import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { Buffer } from "buffer";
import { NextURL } from "next/dist/server/web/next-url";
import { fs } from "fs";
import foodModel from "@/Components/Lib/Models/FoodModel";
import { connectDB } from "@/Components/Lib/Config/Db.config";

// Foods Listing Api Endpoint

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const foodId = searchParams.get("id");
  
    if (foodId) {
      const food = await foodModel.findById(foodId);
      return NextResponse.json({ food });
    } else {
      const foods = await foodModel.find({});
      return NextResponse.json({ msg: "Foods Found", foods });
    }
  }
  

// Food Saving Api Endpoint
export async function POST(request) {

    await connectDB()
    const foodData = await request.formData();
    const timestamp = Date.now();
  
    // Get the image file
    const image = foodData.get("itemImage");
  
    if (image && typeof image.arrayBuffer === "function") {
      // Convert image to arrayBuffer
      const imageByteData = await image.arrayBuffer();
  
      // Create a buffer from the image data
      const buffer = Buffer.from(imageByteData);
  
      // Define path for saving the image
      const path = `./public/${timestamp}_${image.name}`;
  
      // Write the image to the filesystem
      await writeFile(path, buffer);
  
      // Define the image URL path
      const imgUrl = `/${timestamp}_${image.name}`;
  
      // Construct the food data
      const itemData = {
        itemName: `${foodData.get("itemName")}`,
        itemPrice: `${foodData.get("itemPrice")}`,
        itemDescription: `${foodData.get("itemDescription")}`,
        itemCategory: `${foodData.get("itemCategory")}`,
        itemImage: `${imgUrl}`,
      };
  
      // Save the food data to the database
      await foodModel.create(itemData);
      console.log("Food Created");
  
      return NextResponse.json({
        success: true,
        msg: "Food Saved",
        imageUrl: imgUrl,
      });
    } else {
      return NextResponse.json({ success: false, msg: "Invalid image format" });
    }
  }