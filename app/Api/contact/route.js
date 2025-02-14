import ContactModel from "@/Components/Lib/Models/ContactModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/Components/Lib/Config/Db.config";

// Api Endpoint to Get Messages
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const contactId = searchParams.get("id");

  if (contactId) {
    const message = await ContactModel.findById(contactId);
    return NextResponse.json({ message });
  } else {
    const messages = await ContactModel.find({});
    return NextResponse.json({ msg: "Messages found", messages });
  }
}

// Api Endpoint to Save Messages
export async function POST(request) {
  await connectDB();
  try {
    const contactData = await request.json();

    // Log incoming user data to check its structure
    console.log("Contact Details:", contactData);

    // Validate that required fields are provided
    if (!contactData.name || !contactData.email || !contactData.message) {
      return NextResponse.json({
        success: false,
        msg: "Name, email, and message are required fields.",
      });
    }

    const contactsData = {
      name: contactData.name,
      email: contactData.email,
      message: contactData.message, // Changed 'massage' to 'message' here
    };

    await ContactModel.create(contactsData);

    return NextResponse.json({
      success: true,
      msg: "Your message was sent successfully!",
    });
  } catch (error) {
    console.error("Error Saving:", error);
    const errorMsg = error.errors?.message?.message || "Failed to send message";
    return NextResponse.json({
      success: false,
      msg: errorMsg,
    });
  }
}

// Api Endpoint to Delete Messages

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const message = await ContactModel.findById(id);
  await ContactModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Message Deleted" });
}
