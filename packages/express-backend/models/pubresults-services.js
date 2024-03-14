import mongoose from "mongoose";
import pubNumberModel from "./pubresults.js";

mongoose.set("debug", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/public_number", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

  function getNumber(name) {
    return pubNumberModel.find({ name: name });
  }

export default {
  getNumber,
};
