const express = require("express");
const https = require("https");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok");
});

const options = {
  key: fs.readFileSync("./privkey1.pem"),
  cert: fs.readFileSync("./fullchain1.pem"),
  ca: fs.readFileSync("./chain1.pem"),
};

//server = https.createServer(options, app);

app.listen(80, () => {
  console.log("server start");
});
