import React, { Component, useState, useContext } from "react";
import { GlobalContext } from "../context/gobalState.jsx";


function Dashboard() {
    const [ticker,setTicker]= useState("");
    const [qty, setQty] = useState(0);
    const [entryPrice, setEntryPrice] =useState(0);

    const {addStock} = useContext(GlobalContext)

    const onSubmit = e => {
      e.preventDefault();
      const newStock = {
        id: Math.floor(Math.random()*100000000),
        ticker,
        qty,
        entryPrice
      }
      addStock(newStock);
    }

  return (
    <div id="dashboard">
        <h3>Add a Stock</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-input">
          <label>Ticker:</label>
          <input type="text" id="ticker" value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder="Stock"></input>
        </div>
        <div className="form-input">
          <label>Quantity:</label>
          <input type="number" id="shares" value={qty} onChange={(e) => setQty(e.target.value)} placeholder="# Of Shares"></input>
        </div>
        <div className="form-input">
          <label>Entry Price:</label>
          <input type="number" id="entryPrice" value={entryPrice} onChange={(e) => setEntryPrice(e.target.value)} placeholder="Entry Price"></input>
        </div>
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
}

export default Dashboard;
