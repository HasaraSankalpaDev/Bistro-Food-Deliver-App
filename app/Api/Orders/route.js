import { NextResponse } from "next/server";
import { connectDB } from "@/Components/Lib/Config/Db.config";
import OrderModel from "@/Components/Lib/Models/OrdersModel";

// Orders Listing API Endpoint
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userName = searchParams.get("userName");
  if (userName) {
    const order = await OrderModel.find({ userName: userName });
    return NextResponse.json({ order });
  }
  const orders = await OrderModel.find({});
  return NextResponse.json({ orders });
}

// Order Saving API Endpoint
export async function POST(request) {
  await connectDB();
  try {
    const userOrderDetails = await request.json();

    const orderData = {
      userName: userOrderDetails.userName,
      userId: userOrderDetails.userId,
      foodId: userOrderDetails.foodId,
    };

    // Save the blog data to the database
    await OrderModel.create(orderData);
    console.log("Order Saved");

    return NextResponse.json({
      success: true,
      msg: "Order Saved Succesfully",
    });
  } catch (error) {
    console.log(error);
  }
}
