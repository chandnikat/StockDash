const express = require("express");
const router = express.Router();
const {getStocks} = require("../controllers/stocksController.js")

router
    .route("/")
    .get(getStocks)

module.exports = router;
