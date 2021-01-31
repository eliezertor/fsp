const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const omdb = "http://www.omdbapi.com/?";

app.get("/", (req, res) => {
  res.send("We are connected");
  console.log("we hit here");
});

app.post("/search", (req, res) => {
  console.log("I got hit");
  axios
    .get(omdb + "t=" + req.body.search + "=&apikey=" + process.env.OMDB_API)
    .then((res) => {
      console.log(res.data);
      res.send(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`Ready on localhost:${process.env.PORT}`);
});
