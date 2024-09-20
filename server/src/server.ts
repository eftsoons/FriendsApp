import express from "express";
import cors from "cors";
import { readFileSync } from "fs";
import { createServer } from "https";
import SendSQL from "./utils";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("ok");
});

/*const options = {
  key: readFileSync("./privkey1.pem"),
  cert: readFileSync("./fullchain1.pem"),
  ca: readFileSync("./chain1.pem"),
};*/

//server = createServer(options, app);

app.listen(80, () => {
  console.log("start");
});
