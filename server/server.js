const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(cors());
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const omdb = "http://www.omdbapi.com/?";

// app.get("/", (req, res) => {
//   // res.send("We are connected");
//   console.log("we hit here");
// });

// app.post("/search", (req, res) => {
//   console.log("I got hit");
//   // res.send({ message: "We hit search" });
//   let searchResult;
//   axios
//     .get(omdb + "t=" + req.body.search + "=&apikey=" + process.env.OMDB_API)
//     .then((res) => {
//       // console.log(res.data);
//       searchResult = res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   // res.send(searchResult);
//   console.log(searchResult);
// });

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`Ready on localhost:${process.env.PORT}`);
});
