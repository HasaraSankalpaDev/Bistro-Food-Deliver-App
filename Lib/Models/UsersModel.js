import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: true, // Make sure this is set to required
  },
});

// Check if the model already exists, then use it. Otherwise, create a new model.
const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;
