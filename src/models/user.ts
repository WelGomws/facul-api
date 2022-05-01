import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true, select: false },
    type: { type: String, required: true, default: "user" },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const userModel = model("Users", userSchema);
