import ContactModel from "@/Components/Lib/Models/ContactModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/Components/Lib/Config/Db.config";

// Contacts Listing Api Endpoint

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const contactId = searchParams.get("id");

  if (contactId) {
    const massage = await ContactModel.findById(contactId);
    return NextResponse.json({ massage });
  } else {
    const massage = await ContactModel.find({});
    return NextResponse.json({ msg: "massage Found", massage });
  }
}

// Saving Contacts
export async function POST(request) {
  await connectDB();
  try {
    const contactData = await request.json();

    // Log incoming user data to check its structure
    console.log("Contact Details:", contactData);

    // Validate the user data exists
    if (
      !contactData.userId ||
      !contactData.name ||
      !contactData.email ||
      !contactData.massage
    ) {
      return NextResponse.json({
        success: false,
        msg: "Name, email, and password are required fields.",
      });
    }

    const contactsData = {
      userId: contactData.userId,
      name: contactData.name,
      email: contactData.email,
      massage: contactData.massage,
    };

    await ContactModel.create(contactsData);
    console.log("Contact Daved");

    return NextResponse.json({
      success: true,
      msg: "Contact Saved",
    });
  } catch (error) {
    console.error("Error Saving:", error);
    const errorMsg = error.errors?.password?.message || "Failed to create user";
    return NextResponse.json({
      success: false,
      msg: errorMsg,
    });
  }
}
