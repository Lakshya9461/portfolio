import mongoose, { Schema, models, model } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, maxlength: 254 },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
  },
  { timestamps: true }
);

// Re-use compiled model during hot-reload
const Contact = models.Contact || model<IContact>("Contact", ContactSchema);

export default Contact;
