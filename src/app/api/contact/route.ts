import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import Contact from "@/models/Contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const doc = await Contact.create({ name: name.trim(), email: email.trim(), message: message.trim() });

    return NextResponse.json(
      { success: true, id: doc._id },
      { status: 201 }
    );
  } catch (err) {
    console.error("[contact POST]", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
