const Stock = require("../models/stockModel.js");

//Get all stocks
//Route = GET /api/stocks
exports.getStocks = async (req, res, next) => {
  // res.send("GET Stock");
  try {
    const stocks = await Stock.find();
    return res.status(200).json({
      count: stocks.length,
      data: stocks,
    });
  } catch (error) {
    return res.status(400).send("getStocks ERROR: " + error);
  }
};

//Add a stocks
//Route = POST /api/stocks
exports.addStocks = async (req, res, next) => {
  // res.send("POST Stock");
  try {
    const { ticker, price, qty, entryPrice, profitLoss, companyName, priceChange } = req.body;
    const stock = await Stock.create({
      ticker,
      price,
      qty,
      entryPrice,
      profitLoss,
      companyName,
      priceChange
    });
    return res.status(200).json({
      data: stock,
    });
  } catch (error) {
    return res.status(400).send("addStocks ERROR: " + error);
  }
};

//Delete a stocks
//Route = DELETE /api/stocks/:id
exports.deleteStocks = async (req, res, next) => {
  // res.send("DELETE Stock");
  try {
    const stock = await Stock.findById(req.params.id);
    if (!stock) {
      return res.status(404).send("No stock found!");
    }
    await stock.remove();
    return res
      .status(200)
      .send("Stock " + stock.ticker.toUpperCase() + " has been removed!");
  } catch (error) {
    return res.status(400).send("deleteStocks ERROR: " + error);
  }
};
