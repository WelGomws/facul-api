import { model, Schema } from "mongoose";

const stationSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    accessibilityItems: { type: [String], required: true },
    lineId: { type: Schema.Types.ObjectId, ref: "Lines", required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const stationModel = model("Stations", stationSchema);
