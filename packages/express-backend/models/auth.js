import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema(
  {
    flag: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "auth" }
);

const Auth = mongoose.model("Auth", AuthSchema);

export default Auth;