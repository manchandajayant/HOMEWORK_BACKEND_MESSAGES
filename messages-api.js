const express = require("express");

const app = express();
const port = 3000;

//app.use(bodyParser.urlencoded({ extended: false }));
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/messages", (req, res) => {
  if (req.body.text) {
    res.json({ message: req.body.text });
  } else {
    res.status(400).json("bad request");
  }
});
app.listen(port, () => console.log(`This app is running on port${port}`));
