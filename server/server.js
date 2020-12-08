const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const stocks = require("./routes/stocks.js");
const connectDB = require("./models/stockModel.js");


connectDB();
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use("/dist", express.static(path.join(__dirname, "./dist")));
}

app.use("/api/stocks", stocks);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(3000, () => console.log("Server Running On Port " + port));
