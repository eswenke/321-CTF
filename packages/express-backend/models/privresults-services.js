import mongoose from "mongoose";
import privNumberModel from "./privresults.js";

mongoose.set("debug", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/private_number", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

  function getNumber() {
    return privNumberModel.findOne();
  }

export default {
  getNumber,
};
