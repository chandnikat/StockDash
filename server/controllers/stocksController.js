const Stock = require("../models/stockModel.js");

//Get all stocks
//Route = GET /api/stocks
exports.getStocks = async (req, res) => {
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
exports.addStocks = async (req, res) => {
  // res.send("POST Stock");
  try {
    const {
      ticker,
      price,
      qty,
      entryPrice,
      profitLoss,
      companyName,
      priceChange,
      date,
      changePercent,
      high,
      low,
      cost,
    } = req.body;
    const stock = await Stock.create({
      ticker,
      price,
      qty,
      entryPrice,
      profitLoss,
      companyName,
      priceChange,
      date,
      changePercent,
      high,
      low,
      cost,
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
exports.deleteStocks = async (req, res) => {
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

//Update a stock
//Route = PATCH /api/stocks/:ticker
exports.updateStock = async (req, res) => {
  // res.send("PATCH Stock");
  const filter = {ticker: req.params.ticker}
  const update = { 
    $inc: {qty: req.body.qty},
    entryPrice: 8,
  }
  try {
    const stock = await Stock.findOneAndUpdate(filter, update, {new:true})
    // if (!stock) {
    //   return res.status(404).send("No stock found to Update!");
    // }
    return res.status(200).json({});
  } catch (error) {
    return res.status(400).send("updateStock ERROR: " + error);
  }
};