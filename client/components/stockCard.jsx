import React, { Component, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/gobalState.jsx";
import { numberWithCommas } from "../utils/formatFuncs.js";
import Modal from "./modal.jsx";

function StockCard({ stock }) {
  const [modalState, setModalState] = useState(false);
  // console.log(stock)
  const { deleteStock } = useContext(GlobalContext);

  //Calc profit loss:
  let profitLoss = (stock.qty*stock.price)-(stock.cost);
  const sign = profitLoss < 0 ? "-" : "+";

  //For Modal:
  const priceChangeSign = stock.priceChange < 0 ? "-" : "+";
  const percentChangeSign = stock.changePercent < 0 ? "-" : "+";

  const manageModal = () => {
    setModalState(!modalState);
    // console.log(modalState);
  };

  const newClick = () => {
    const url = `https://finance.yahoo.com/quote/${stock.ticker}/`;
    window.open(url, "_blank");
  };

  //Setup conditional for High/Low price in case fetch is pending:
  let highPrice;
  if (stock.high) {
    highPrice= `$${numberWithCommas(stock.high.toFixed(2))}`
  } else {
    highPrice= "Pending"
  }
  let lowPrice;
  if (stock.low) {
    lowPrice= `$${numberWithCommas(stock.low.toFixed(2))}`
  } else {
    lowPrice= "Pending"
  }

  return (
    <div className="stock">
      <li
        className={stock.profitLoss >= 0 ? "plus-border" : "minus-border"}
        id="stock"
      >
        <table className="mainTable">
          <tbody>
            <tr id="head-table" className="mainTableRow">
              <th className="mainTableCell">Ticker</th>
              <th className="mainTableCell">Stock Price</th>
              <th className="mainTableCell">Shares</th>
              <th className="mainTableCell">Profit/Loss</th>
              <th className="mainTableCell">Entry Price</th>
            </tr>
            <tr id="body-table" className="mainTableRow">
              <th className="mainTableCell">
                <span onClick={manageModal} className="ticker">
                  {stock.ticker.toUpperCase()}
                </span>
              </th>
              <th className="mainTableCell">
                ${numberWithCommas(Math.abs(stock.price).toFixed(2))}
              </th>
              <th className="mainTableCell">{numberWithCommas(stock.qty)}</th>
              <th className="mainTableCell">
                <span className={profitLoss >= 0 ? "plus" : "minus"}>
                  {sign}$
                  {numberWithCommas(Math.abs(profitLoss).toFixed(2))}
                </span>
              </th>
              <th className="mainTableCell">
                ${numberWithCommas(Math.abs(stock.cost/stock.qty).toFixed(2))}
              </th>
            </tr>
          </tbody>
        </table>
        <button onClick={() => deleteStock(stock._id)} className="delete-btn">
          Delete
        </button>
      </li>
      {/* MODAL CONTENT: */}
      <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modal-Bg">
          <div className="modal-content">
            <div className="modal-close">
              <span onClick={manageModal}>+</span>
            </div>
            <div className="modal-header">
              {" "}
              {stock.ticker.toUpperCase()}{" "}
              <span className="tickerName">({stock.companyName})</span>
            </div>
            <div className="modal-body">
              <p className="modalDate">{stock.date}</p>
              <table className="modalTable">
                <tbody>
                  <tr className="modalTableRowOdd">
                    <th className="modalTableLeft">Price Change:</th>
                    <th className="modalTableRight">
                      <span
                        className={
                          priceChangeSign === "+" ? "modalProfit" : "modalLoss"
                        }
                      >
                        {priceChangeSign}$
                        {Math.abs(stock.priceChange).toFixed(2)}
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th className="modalTableLeft">% Change:</th>
                    <th className="modalTableRight">
                      <span
                        className={
                          percentChangeSign === "+"
                            ? "modalProfit"
                            : "modalLoss"
                        }
                      >
                        {percentChangeSign}
                        {Math.abs(stock.changePercent * 100).toFixed(2)}%
                      </span>
                    </th>
                  </tr>
                  <tr className="modalTableRowOdd">
                    <th className="modalTableLeft ">Today's High:</th>
                    <th className="modalTableRight">
                      {highPrice}
                    </th>
                  </tr>
                  <tr>
                    <th className="modalTableLeft">Today's Low:</th>
                    <th className="modalTableRight">
                      {lowPrice}
                    </th>
                  </tr>
                </tbody>
              </table>
              <h2 className="modalNews">
                <button onClick={newClick} className="news-btn">
                  News
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockCard;
