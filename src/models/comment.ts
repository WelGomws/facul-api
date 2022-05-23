import { model, Schema } from "mongoose";

const commentSchema = new Schema(
  {
    author: { type: String, required: false },
    comment: { type: String, required: true },
    active: { type: Boolean, required: true, default: true },
    station: { type: Schema.Types.ObjectId, ref: "Stations", required: false },
    reviewed: { type: Boolean, required: false, default: false }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const commentModel = model("Comments", commentSchema);
