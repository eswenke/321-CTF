import mongoose from "mongoose";

const PubNumberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    number: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "public_number" }
);

const PubNumber = mongoose.model("PubNumber", PubNumberSchema);

export default PubNumber;
