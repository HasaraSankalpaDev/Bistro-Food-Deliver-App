import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  type: {
    type: String,
    required: true,
  },
});

// Check if the model already exists, then use it. Otherwise, create a new model.
const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;
