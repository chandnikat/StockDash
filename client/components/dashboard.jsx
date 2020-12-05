import React, { Component } from "react";

function Dashboard() {
  return (
    <div id="dashboard">
        <h3>Add a Stock</h3>
      <form id="form">
        <div className="form-input">
          <label>Ticker:</label>
          <input type="text" id="ticker" placeholder="Ticker"></input>
        </div>
        <div className="form-input">
          <label>Quantity:</label>
          <input type="number" id="shares" placeholder="# Of Shares"></input>
        </div>
        <div className="form-input">
          <label>Entry Price:</label>
          <input type="number" id="entryPrice" placeholder="Entry Price"></input>
        </div>
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
}

export default Dashboard;
