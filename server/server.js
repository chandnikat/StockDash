const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const controllers = require("./controllers/controllers.js")
// app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());

if(process.env.NODE_ENV === "production"){
  app.use('/dist', express.static(path.join(__dirname, './dist')));
}
// serve index.html on the route '/'


app.get("/stocks", controllers.getStocks, (request, response) => {
  response.status(200).json(response.locals.stocksArray);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
// app.post(
//   "/stocks",
//   controllers.postStocks,
//   (request, response) => {
//     response.status(200).send("Ticker posted successfully");
//   }
// );

app.listen(3000, () => console.log("Localhost Running on port " + port) )