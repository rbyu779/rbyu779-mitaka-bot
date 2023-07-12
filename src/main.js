require('dotenv').config();
const client = require("./lib/client.js");
const express = require("express");

const app = express();

console.log("Preparing bot,");
console.log("Please wait...");

client.initialize();

app.get('/', (req, res) => {
  res.send("bot running!");
})

app.listen(8000, () => console.log("app listening on port: 8000"));