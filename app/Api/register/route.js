import UserModel from "@/Components/Lib/Models/UsersModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/Components/Lib/Config/Db.config";

export async function POST(request) {
  await connectDB();

  try {
    const formData = await request.formData();
    const email = formData.get("email");

    const usersData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      type: "user",
    };

    // Check User is Already Exists
    const user = await UserModel.findOne({ email });

    if (user) {
      return NextResponse.json({
        success: false,
        msg: "User_Already_Exist",
      });
    }

    await UserModel.create(usersData);

    return NextResponse.json({
      success: true,
      msg: "User_Registered",
    });
  } catch (error) {
    console.error("Error_Found", error);
    return NextResponse.json({
      success: false,
      msg: "Error_Found",
      error: error.message,
    });
  }
}
