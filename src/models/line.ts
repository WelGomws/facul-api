import { model, Schema } from "mongoose";

const lineSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    color: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const lineModel = model("Lines", lineSchema);
