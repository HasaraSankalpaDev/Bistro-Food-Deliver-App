import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userId: { type: String, required: true },
  foodId: { type: String, required: true },
  foodName: { type: String, required: true },
  foodPrice: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const OrdersModel =
  mongoose.models.Order || mongoose.model("Order", OrderSchema);
export default OrdersModel;
