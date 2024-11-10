import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  itemPrice: { type: String, required: true },
  itemDescription: { type: String, required: true },
  itemCategory: { type: String, required: true },
  itemImage: { type: String, required: true },
});

// This prevents the OverwriteModelError when the model is imported multiple times
const foodModel = mongoose.models.Food || mongoose.model("Food", foodSchema);

export default foodModel;
