const express = require("express");
const cors = require("cors");

app = express();
app.use(cors());



app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`Ready on localhost:${process.env.PORT}`);
});
