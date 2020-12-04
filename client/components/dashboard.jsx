import React, { Component } from "react";

//Dashboard COMPONENT:
class dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <h1 id="title">Stock Tracker Dashboard</h1>
        <input id="ticker" placeholder="Ticker"></input>
        <input id="shares" placeholder="# of Shares"></input>
        <input id="entryPrice" placeholder="Entry Price"></input>
        <button id="stock-button">Submit</button>
      </div>
    );
  }
}

export default dashboard;