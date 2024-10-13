import UserModel from "@/Components/Lib/Models/UsersModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/Components/Lib/Config/Db.config";

export async function POST(request) {
  await connectDB();
  try {
    const userData = await request.json();

    // Log incoming user data to check its structure
    console.log("User Data:", userData);

    // Validate the user data exists
    if (!userData.name || !userData.email || !userData.password) {
      return NextResponse.json({
        success: false,
        msg: "Name, email, and password are required fields.",
      });
    }

    const usersData = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
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
    const errorMsg = error.errors?.password?.message || "Failed to create user";
    return NextResponse.json({
      success: false,
      msg: errorMsg,
    });
  }
}
