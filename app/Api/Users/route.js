import UserModel from "@/Components/Lib/Models/UsersModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/Components/Lib/Config/Db.config"; // Changed to import

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
  // Ensure the database is connected before performing any operation
  await connectDB();

  try {
    // If you are sending data as JSON
    const userData = await request.json(); // Parse the request body as JSON

    // Construct the user data
    const usersData = {
      name: userData.name, // Access the fields directly from userData
      email: userData.email,
      password: userData.password, // Ensure password is passed
      type: "user", // Default to 'user' if userType is not provided
    };

    // Save the user data to the database
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
