import UserModel from "@/Components/Lib/Models/UsersModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/Components/Lib/Config/Db.config";

// User Login
export async function POST(request) {
  await connectDB(); // Ensure the database is connected

  try {
    const { email, password } = await request.json(); // Parse the login credentials from the request body

    // Find the user by email
    const user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: true, msg: "User_Not_Found" },
        { status: 200 }
      );
    }

    // Verify the password
    const isPasswordValid = password === user.password; // In production, use hashed passwords

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, msg: "Invalid_Credentials" },
        { status: 200 }
      );
    }

    // Verify User
    if (user.type === "user") {
      return NextResponse.json(
        { success: true, msg: "User_Found", user },
        { status: 200 }
      );
    }

    // Verify Admin
    if (user.type === "admin") {
      return NextResponse.json(
        { success: true, msg: "Admin_Found", user },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("404_Error", error);
    return NextResponse.json(
      { success: false, msg: "404_Error", error: error.message },
      { status: 500 }
    );
  }
}
