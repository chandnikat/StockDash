const express = require("express");
const router = express.Router();
const {getStocks, addStocks, deleteStocks} = require("../controllers/stocksController.js")

router
    .route("/")
    .get(getStocks)
    .post(addStocks);

router
    .route("/:id")
    .delete(deleteStocks)



module.exports = router;
