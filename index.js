const express = require("express");

const app = express();

app.get("/users", function (req, res) {
  res.send("hello");
});
const bok=require('./b');
console.log(bok());

app.get("/books", function (req, res) {
  res.send({ student: bok() });
});

app.listen(2000, () => {
  console.log("listening on port 2000");
});
