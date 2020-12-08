const Stock = require("../models/stockModel.js")

//Get all stocks
//Route = GET /api/stocks
exports.getStocks = async (req, res, next) => {
  // res.send("GET Stock");
  try {
    const stocks = await Stock.find();
    return res.status(200).json({
      success: true,
      data : stocks,
    })
  } catch (err){
    return res.status(400).send("getStocks ERROR: " + err)
  }
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
