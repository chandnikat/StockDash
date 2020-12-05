import React, { Component, useState } from "react";

function Dashboard() {
    const [ticker,setTicker]= useState("");
    const [qty, setQty] = useState(0);
    const [entryPrice, setEntryPrice] =useState(0)

  return (
    <div id="dashboard">
        <h3>Add a Stock</h3>
      <form id="form">
        <div className="form-input">
          <label>Ticker:</label>
          <input type="text" id="ticker" value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder="Ticker Name"></input>
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
