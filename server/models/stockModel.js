const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  ticker: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
  },
  qty: {
    type: Number,
  },
  entryPrice: {
    type: Number,
  },
  profitLoss: {
    type: Number,
  },
  profitLoss: {
    type: String,
  },
  companyName: {
    type: String
  },
  priceChange: {
    type: Number,
  },
  date: {
    type: String,
  },
  changePercent: {
    type: Number,
  },
  high: {
    type: Number,
  },
  low: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("stock", stockSchema);
