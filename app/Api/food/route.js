import { NextResponse } from "next/server";
import { connectDB } from "@/Components/Lib/Config/Db.config";
import foodModel from "@/Components/Lib/Models/FoodModel";
import { writeFile } from "fs/promises";
import { Buffer } from "buffer";

// Blog Saving API Endpoint
export async function POST(request) {
  try {
    // Connect to the database
    await connectDB();

    // Parse the incoming request data
    const formData = await request.formData(); // Use formData to handle multipart data

    // Get the image file
    const image = formData.get("image"); // This should match the name in your form data

    if (image && typeof image.arrayBuffer === "function") {
      // Convert image to ArrayBuffer
      const imageByteData = await image.arrayBuffer();

      // Create a buffer from the image data
      const buffer = Buffer.from(imageByteData);

      // Define the path for saving the image
      const timestamp = Date.now();
      const path = `./public/${timestamp}_${image.name}`;

      // Write the image to the filesystem
      await writeFile(path, buffer);

      // Define the image URL path
      const imgUrl = `/${timestamp}_${image.name}`;

      // Construct the food data
      const foodData = {
        itemName: formData.get("itemName"),
        itemPrice: formData.get("itemPrice"),
        itemDescription: formData.get("itemDescription"),
        itemCategory: formData.get("itemCategory"),
        itemImage: imgUrl,
      };

      // Save the food data to the database
      await foodModel.create(foodData);
      console.log("Food Added");

      return NextResponse.json({
        success: true,
        msg: "Food Saved",
        imageUrl: imgUrl,
      });
    } else {
      return NextResponse.json({ success: false, msg: "Invalid image format" });
    }
  } catch (error) {
    console.error("Error saving food:", error);
    return NextResponse.json({ success: false, msg: "Error saving food" });
  }
}
