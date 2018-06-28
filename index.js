//====LIST DEPENDENCIES===//
const express = require("express");
const parseurl = require("parseurl");
const bodyParser = require("body-parser");
const path = require("path");
const expressValidator = require("express-validator");
const mongoose = require("mongoose");
const Signature = require("./models/signature.js");
const cors = require("cors");
//=========================//
const port = process.env.PORT || 3000;
const app = express(cors({ credentials: true, origin: true }));
const realUrl = process.env.MONGOLAB_URI;

console.log("--- ", realUrl);

mongoose.connect(
  realUrl,
  function(err, db) {
    if (err) {
      console.log("Unable to connect to the mongoDB server. Error:", err);
    } else {
      console.log("Connection established to", realUrl);
    }
  }
);

app.get("/", function(req, res) {
  res.json("you did it");
});

app.get("/api/signatures", function(req, res) {
  Signature.find({}).then(eachOne => {
    res.json(eachOne);
  });
});

app.post("/api/signatures", function(req, res) {
  Signature.create({
    guestSignature: req.body.SignatureOfGuest,
    message: req.body.MessageofGuest
  }).then(signature => {
    res.json(signature);
  });
});

app.listen(port, () => {
  console.log("server is up");
});
