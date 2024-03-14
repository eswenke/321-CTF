import mongoose from "mongoose";
import authModel from "./auth.js";

mongoose.set("debug", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/auth_list", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

function getLevel(flag) {
  return authModel.find({ flag: flag });
}

export default {
  getLevel,
};
