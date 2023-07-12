require('dotenv').config();
const client = require("./lib/client.js");
const express = require("express");
const qrcode = require("qrcode");
const path = require("path");

const app = express();

console.log("Preparing bot,");
console.log("Please wait...");
client.initialize();

app.use(express.static('src/public'))

app.get('/', (req, res) => {
  res.redirect([200], '/public/index.html')
})

app.listen(8000, () => {
  console.log("app listening on port: 8000, wait until client ready");
});