import { model, Schema } from "mongoose";

const commentSchema = new Schema(
  {
    author: { type: String, required: false },
    comment: { type: String, required: true },
    active: { type: Boolean, required: true },
    station: { type: Schema.Types.ObjectId, ref: "Stations" },
  },
  {
    timestamps: true,
  }
);

export const commentModel = model("Comments", commentSchema);
