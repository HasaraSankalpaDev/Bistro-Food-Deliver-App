import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { Buffer } from "buffer";
import foodModel from "@/Components/Lib/Models/FoodModel";
import { connectDB } from "@/Components/Lib/Config/Db.config";

// Api Endpoint to Get Foods
export async function GET(request) {
  await connectDB();

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

// Api Endpoint to Save Foods
export async function POST(request) {
  await connectDB();
  const foodData = await request.formData();
  const timestamp = Date.now();

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

    await foodModel.create(itemData);
    console.log("Food Saved Succesfully");

    return NextResponse.json({
      success: true,
      msg: "Food Saved",
      imageUrl: imgUrl,
    });
  } else {
    return NextResponse.json({ success: false, msg: "Invalid image format" });
  }
}

// API Endpoint to Edit Food Details

export async function PUT(request) {
  try {
    await connectDB();

    const formData = await request.formData();
    const itemId = formData.get("itemId");
    const itemName = formData.get("itemName");
    const itemPrice = formData.get("itemPrice");
    const itemDescription = formData.get("itemDescription");
    const itemCategory = formData.get("itemCategory");
    const itemImage = formData.get("itemImage");

    const timestamp = Date.now();

    const existingItem = await foodModel.findById(itemId);
    if (!existingItem) {
      return NextResponse.json({ success: false, msg: "Item not found" });
    }

    let imgUrl = existingItem.itemImage;

    if (itemImage && typeof itemImage.arrayBuffer === "function") {
      // Convert image to arrayBuffer
      const imageByteData = await itemImage.arrayBuffer();

      // Create a buffer from the image data
      const buffer = Buffer.from(imageByteData);

      // Define path for saving the image
      const path = `./public/${timestamp}_${itemImage.name}`;

      // Write the image to the filesystem
      await writeFile(path, buffer);

      // Update imgUrl with new image path
      imgUrl = `/${timestamp}_${itemImage.name}`;
    }

    const updatedData = {
      itemName: itemName || existingItem.itemName,
      itemPrice: itemPrice || existingItem.itemPrice,
      itemDescription: itemDescription || existingItem.itemDescription,
      itemCategory: itemCategory || existingItem.itemCategory,
      itemImage: imgUrl,
    };

    await foodModel.findByIdAndUpdate(itemId, updatedData);

    console.log("Food Item Updated Successfully");

    return NextResponse.json({
      success: true,
      msg: "Food Item Updated",
      imageUrl: imgUrl,
    });
  } catch (error) {
    console.error("Error updating food item:", error);
    return NextResponse.json({
      success: false,
      msg: "Failed to update food item",
    });
  }
}

// API Endpoint to Delete Food

export async function DELETE(request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const food = await foodModel.findById(id);
  await foodModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Food Item Deleted" });
}
