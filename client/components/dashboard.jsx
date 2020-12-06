import React, { Component, useState, useContext } from "react";
import { GlobalContext } from "../context/gobalState.jsx";

function Dashboard() {
  const [ticker, setTicker] = useState("");
  const [qty, setQty] = useState(0);
  const [entryPrice, setEntryPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const { addStock } = useContext(GlobalContext);

  //API request:
  const token = "Q0PFL2R0GZ167DNF";

  // console.log("TICKER", ticker);
  const url =
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
    ticker +
    "&apikey=" +
    token;

  const getData = (ticker) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("INSIDE " + ticker, data["Global Quote"]["05. price"]);
        let lastPrice = data["Global Quote"]["05. price"];
        setPrice(lastPrice);
      })
      .catch((err) => console.log("API ERROR: " + err));
  };
  // console.log("PRice", price);

  const onSubmit = (e) => {
    e.preventDefault();
    const newStock = {
      id: Math.floor(Math.random() * 100000000),
      ticker,
      price,
      qty,
      entryPrice,
    };
    getData(e.target.value);
    addStock(newStock);
    console.log("onsubmit")
  };

  return (
    <div id="dashboard">
      <h3>Add a Stock</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-input">
          <label>Ticker:</label>
          <input
            type="text"
            id="ticker"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            placeholder="Stock"
          ></input>
        </div>
        <div className="form-input">
          <label>Quantity:</label>
          <input
            type="number"
            id="shares"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            placeholder="# Of Shares"
          ></input>
        </div>
        <div className="form-input">
          <label>Entry Price:</label>
          <input
            type="number"
            id="entryPrice"
            value={entryPrice}
            onChange={(e) => setEntryPrice(e.target.value)}
            placeholder="Entry Price"
          ></input>
        </div>
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
}

export default Dashboard;
