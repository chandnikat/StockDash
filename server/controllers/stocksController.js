//Get all stocks
//Route = GET /api/stocks
exports.getStocks = (req, res, next) => {
  res.send("GET Stocks");
};

//Add a stocks
//Route = POST /api/stocks
exports.addStocks = (req, res, next) => {
  res.send("POST Stock");
};

//Delete a stocks
//Route = DELETE /api/stocks/:id
exports.deleteStocks = (req, res, next) => {
  res.send("DELETE Stock");
};
