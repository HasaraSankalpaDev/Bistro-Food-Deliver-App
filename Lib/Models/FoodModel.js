import mongoose from "mongoose";

// Define the schema for food items
const foodSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  itemPrice: { type: String, required: true },
  itemDescription: { type: String, required: true },
  itemCategory: { type: String, required: true },
  itemImage: { type: String, required: true },
});

// Check if the model already exists in mongoose.models
// This prevents the OverwriteModelError when the model is imported multiple times
const foodModel = mongoose.models.Food || mongoose.model("Food", foodSchema);

// Export the food model
export default foodModel;
