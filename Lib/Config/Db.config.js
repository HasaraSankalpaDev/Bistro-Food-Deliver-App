const mongoose = require("mongoose");

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://admin:admin@users.zmimk.mongodb.net/");
  console.log("Mongo DB Connected");
};
