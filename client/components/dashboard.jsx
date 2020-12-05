import React, { Component } from "react";

function Dashboard() {
  return (
    <div id="dashboard">
      <input className="entry" id="ticker" placeholder="Ticker"></input>
      <input className="entry" id="shares" placeholder="# of Shares"></input>
      <input
        className="entry"
        id="entryPrice"
        placeholder="Entry Price"
      ></input>
      <button id="stock-button">Add</button>
    </div>
  );
}

export default Dashboard;
