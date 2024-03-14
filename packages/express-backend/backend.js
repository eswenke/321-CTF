import privresultsServices from "./models/privresults-services.js";
import pubresultsServices from "./models/pubresults-services.js";
import authServices from "./models/auth-services.js";

import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! No flags here! :)");
});

app.get("/public_number/:name", async (req, res) => {
  const name = req.params["name"];
  try {
    const result = await pubresultsServices.getNumber(name);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.get("/private_number/:name", async (req, res) => {
  const name = req.params["name"];
  try {
    const result = await privresultsServices.getNumber(name);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.get("/auth/:flag", async (req, res) => {
    const flag = req.params["flag"];
    try {
      const result = await authServices.getLevel(flag);
      res.send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("An error ocurred in the server.");
    }
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
