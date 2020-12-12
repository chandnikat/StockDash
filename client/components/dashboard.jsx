import React, { Component, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/gobalState.jsx";

function Dashboard() {
  const [ticker, setTicker] = useState("");
  const [qty, setQty] = useState(0);
  const [entryPrice, setEntryPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [priceChange, setPriceChange] = useState(0);
  const [date, setDate] = useState("");
  const [changePercent, setChangePercent] = useState(0);
  const [high, setHigh] = useState(0);
  const [low, setLow] = useState(0);
  const [card, setCard] = useState(true);
  const { addStock, updateStock } = useContext(GlobalContext);

  //API request:
  const token = "pk_474db16c98ae4dfcb050cbf314058d17";
  let symbol = ticker;
  // console.log(ticker)
  const url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${token}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let lastPrice = data.latestPrice;
        setPrice(lastPrice);
        setCompanyName(data.companyName);
        setPriceChange(data.change);
        setDate(data.latestTime);
        setChangePercent(data.changePercent);
        setHigh(data.high);
        setLow(data.low);
      })

      .catch((err) => console.log("API ERROR: " + err));
  }, [ticker]);

  const clear = () => {
    setTicker("");
    setQty(0);
    setEntryPrice(0);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newStock = {
      ticker,
      price,
      qty,
      entryPrice,
      profitLoss: qty * price - qty * entryPrice,
      companyName,
      priceChange,
      date,
      changePercent,
      high,
      low,
      cost: qty * entryPrice,
    };

    if (card) {
      addStock(newStock);
      setCard(false);
    } else {
      updateStock(ticker, newStock);
      setCard(true);
    }

    clear();
  };

  return (
    <div id="dashboard">
      <h3>Add a Stock:</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-input">
          <label>Ticker:</label>
          <br />
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
          <br />
          <input
            // type="number"
            className="number"
            id="shares"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            placeholder="# Of Shares"
          ></input>
        </div>
        <div className="form-input">
          <label>Entry Price:</label>
          <br />
          <input
            // type="number"
            id="entryPrice"
            className="number"
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
