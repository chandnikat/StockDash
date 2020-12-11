const express = require("express");
const router = express.Router();
const {getStocks, addStocks, deleteStocks, updateStock} = require("../controllers/stocksController.js");


router
    .route("/")
    .get(getStocks)
    .post(addStocks);

router
    .route("/:id")
    .delete(deleteStocks)

router
    .route("/:ticker")
    .patch(updateStock)

module.exports = router;
