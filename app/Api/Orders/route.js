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
      itemCount: userOrderDetails.itemCount,
    };

    if (!orderData.itemCount || isNaN(orderData.itemCount)) {
      console.error("Item count is missing or invalid");
      return NextResponse.json({ success: false, msg: "Invalid item count" });
    }

    // Save the order data to the database
    await OrderModel.create(orderData);
    console.log("Order Saved");

    return NextResponse.json({
      success: true,
      msg: "Order Saved Successfully",
    });
  } catch (error) {
    console.error("Error saving order:", error);
    return NextResponse.json({
      success: false,
      msg: "An error occurred while saving the order.",
    });
  }
}

// Delete Order By Id
export async function DELETE(request) {
  try {
    await connectDB(); // Connect to the database

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const userId = searchParams.get("userId");

    if (id) {
      const order = await OrderModel.findById(id);

      if (!order) {
        return NextResponse.json({ msg: "Order not found" }, { status: 404 });
      }

      await OrderModel.findByIdAndDelete(id);
      return NextResponse.json(
        { msg: "Order deleted successfully" },
        { status: 200 }
      );
    } else if (userId) {
      await OrderModel.deleteMany({ userId: userId }); // Use deleteMany to delete orders for a specific user
      return NextResponse.json(
        { msg: "Orders for the user deleted successfully" },
        { status: 200 }
      );
    } else {
      await OrderModel.deleteMany({});
      return NextResponse.json(
        { msg: "All orders deleted successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error deleting orders:", error);
    return NextResponse.json({ msg: "Error deleting orders" }, { status: 500 });
  }
}
