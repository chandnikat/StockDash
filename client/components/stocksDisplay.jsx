import React, { Component } from "react";
import StockCard from "./stockCard.jsx";

class StocksDisplay extends Component {
  render() {
    return (
      <div id="stocksDisplay">
        <StockCard/>
        <p>test</p>
      </div>
    );
  }
}

export default StocksDisplay;