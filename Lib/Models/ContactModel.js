import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
  time: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model already exists; otherwise, create a new model.
const ContactModel =
  mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);

export default ContactModel;
