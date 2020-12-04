import React, { Component } from "react";


class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <h1 id="title">Stock Tracker Dashboard</h1>
        <input className="entry" id="ticker" placeholder="Ticker"></input>
        <input className="entry"  id="shares" placeholder="# of Shares"></input>
        <input className="entry"  id="entryPrice" placeholder="Entry Price"></input>
        <button id="stock-button">Submit</button>
      </div>
    );
  }
}

export default Dashboard;