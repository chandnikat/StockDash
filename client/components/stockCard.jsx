import React, { Component, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/gobalState.jsx";
import { numberWithCommas } from "../utils/formatFuncs.js";
import Modal from "./modal.jsx";

function StockCard({ stock }) {
  const [modalState, setModalState] = useState(false);
  // console.log(stock)
  const { deleteStock } = useContext(GlobalContext);

  const manageModal = () => {
    setModalState(!modalState);
    // console.log(modalState);
  };

  const sign = stock.profitLoss < 0 ? "-" : "+";

  const raiseInvoiceClicked = () => {
    const url = `https://finance.yahoo.com/quote/${stock.ticker}/`;
    window.open(url, "_blank");
  };

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
                <span className={stock.profitLoss >= 0 ? "plus" : "minus"}>
                  {sign}$
                  {numberWithCommas(Math.abs(stock.profitLoss).toFixed(2))}
                </span>
              </th>
              <th className="mainTableCell">
                ${numberWithCommas(Math.abs(stock.entryPrice).toFixed(2))}
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
                      ${stock.priceChange.toFixed(2)}
                    </th>
                  </tr>
                  <tr>
                    <th className="modalTableLeft">% Change:</th>
                    <th className="modalTableRight">
                      {(stock.changePercent * 100).toFixed(2)}%
                    </th>
                  </tr>
                  <tr className="modalTableRowOdd">
                    <th className="modalTableLeft ">Today's High:</th>
                    <th className="modalTableRight">
                      ${stock.high.toFixed(2)}
                    </th>
                  </tr>
                  <tr>
                    <th className="modalTableLeft">Today's Low:</th>
                    <th className="modalTableRight">${stock.low.toFixed(2)}</th>
                  </tr>
                </tbody>
              </table>
              <h2 className="modalNews">
                <button onClick={raiseInvoiceClicked}>News</button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockCard;
