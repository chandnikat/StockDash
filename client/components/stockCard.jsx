import React, { Component, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/gobalState.jsx";
import { numberWithCommas } from "../utils/formatFuncs.js";
import Modal from "./modal.jsx";

function StockCard({ stock }) {
  const [modalState, setModalState] = useState(false);

  const { deleteStock } = useContext(GlobalContext);

  const manageModal = () => {
    setModalState(!modalState);
    // console.log(modalState);
  };

  const sign = stock.profitLoss < 0 ? "-" : "+";

  return (
    <div className="stock">
      <li
        className={stock.profitLoss >= 0 ? "plus-border" : "minus-border"}
        id="stock"
      >
        <table>
          <tbody>
            <tr id="head-table">
              <th>Ticker</th>
              <th>Stock Price</th>
              <th>Shares</th>
              <th>Profit/Loss</th>
              <th>Entry Price</th>
            </tr>
            <tr id="body-table">
              <th>
                <span onClick={manageModal} className="ticker">
                  {stock.ticker.toUpperCase()}
                </span>
              </th>
              <th>${numberWithCommas(Math.abs(stock.price).toFixed(2))}</th>
              <th>{numberWithCommas(stock.qty)}</th>
              <th>
                <span className={stock.profitLoss >= 0 ? "plus" : "minus"}>
                  {sign}$
                  {numberWithCommas(Math.abs(stock.profitLoss).toFixed(2))}
                </span>
              </th>
              <th>
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
            <div className="modal-header"> Boeing X</div>
            <div className="modal-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockCard;
