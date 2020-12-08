const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const stocks = require("/Users/Chandni/Desktop/Codesmith-Program/SoloProject/SoloProject/server/routes/stocks.js")
const connectDB = require("/Users/Chandni/Desktop/Codesmith-Program/SoloProject/SoloProject/server/models/stockModel.js")



connectDB()
const app = express();

app.use(express.json());

if(process.env.NODE_ENV === "production"){
  app.use('/dist', express.static(path.join(__dirname, './dist')));
}


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });
app.use("/api/stocks", stocks)

app.listen(3000, () => console.log("Server Running On Port " + port) )