const express = require("express");
const router = express.Router();
const {getStocks, addStocks, deleteStocks} = require("/Users/Chandni/Desktop/Codesmith-Program/SoloProject/SoloProject/server/controllers/stocksController.js")

router
    .route("/")
    .get(getStocks)
    .post(addStocks);

router
    .route("/:id")
    .delete(deleteStocks)



module.exports = router;
