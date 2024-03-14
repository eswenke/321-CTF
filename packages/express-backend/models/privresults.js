import mongoose from "mongoose";

const PrivNumberSchema = new mongoose.Schema(
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
  { collection: "private_number" }
);

const PrivNumber = mongoose.model("PrivNumber", PrivNumberSchema);

export default PrivNumber;