import UserModel from "@/Components/Lib/Models/UsersModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/Components/Lib/Config/Db.config";

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
