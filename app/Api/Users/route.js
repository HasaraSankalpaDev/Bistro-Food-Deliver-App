import UserModel from "@/Components/Lib/Models/UsersModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/Components/Lib/Config/Db.config"; // Changed to import
import { writeFile } from "fs/promises"; // To write the image to the file system
import { Buffer } from "buffer";

// Get All Users

export async function GET(request) {
  // Ensure the database is connected before performing any operation
  await connectDB();

  try {
    // Parse the request URL and its query parameters
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id"); // Get the 'id' query parameter

    if (userId) {
      // Find a user by the provided ID
      const user = await UserModel.findById(userId);
      if (!user) {
        return NextResponse.json(
          { success: false, msg: "User not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, msg: "User Found", user });
    } else {
      // Find all users if no ID is provided
      const users = await UserModel.find({});
      return NextResponse.json({ success: true, msg: "Users Found", users });
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, msg: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// Add User
export async function POST(request) {
  await connectDB();

  try {
    const formData = await request.formData();

    const usersData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),

      type: "user",
    };

    await UserModel.create(usersData);
    console.log("User Created");

    return NextResponse.json({
      success: true,
      msg: "User Created",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({
      success: false,
      msg: "Failed to create user",
      error: error.message,
    });
  }
}

// API Endpoint to Edit User
export async function PUT(request) {
  try {
    await connectDB();

    const formData = await request.formData();
    const id = formData.get("id");
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const existingUser = await UserModel.findById(id);
    if (!existingUser) {
      return NextResponse.json({ success: false, msg: "User not found" });
    }

    // Construct the updated user data
    const updatedData = {
      name: name || existingUser.name,
      email: email || existingUser.email,
      password: password || existingUser.password,
    };

    // Update the user in the database
    await UserModel.findByIdAndUpdate(id, updatedData);

    return NextResponse.json({
      success: true,
      msg: "User Updated",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({
      success: false,
      msg: "Failed to update user",
      error: error.message,
    });
  }
}

// API Endpoint to Delete User

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const user = await UserModel.findById(id);
  await UserModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "User  Deleted" });
}
