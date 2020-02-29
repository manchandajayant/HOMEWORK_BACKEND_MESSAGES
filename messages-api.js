const express = require("express");

const app = express();
const port = 3000;

//app.use(bodyParser.urlencoded({ extended: false }));
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const num = (req, res, next) => {
  if (req > 2) {
    res.status(429).json("Too many requests");
  } else {
    next();
  }
};

app.post("/messages", num, (req, res) => {
  if (req.body.text) {
    res.json({ message: req.body.text });
  } else {
    res.status(400).json("bad request");
  }
});
app.listen(port, () => console.log(`This app is running on port${port}`));
