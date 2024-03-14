import privresultsServices from "./models/privresults-services";
import pubresultsServices from "./models/pubresults-services";

import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! No flags here! :)");
});

app.get("/public_number", async (req, res) => {
  try {
    const result = await pubresultsServices.getNumber();
    res.send({ public_number: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.get("/private_number", async (req, res) => {
  try {
    const result = await privresultsServices.getNumber();
    res.send({ private_number: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
