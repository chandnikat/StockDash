import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer.jsx";
import axios from "axios";

//Initial state:
const initialState = {
  stocks: [
    // {
    //   id: 1,
    //   ticker: "AAPl",
    //   price: 114,
    //   qty: 36,
    //   profitLoss: 15,
    //   entryPrice: 115,
    // },
  ],
};

//Create context:
export const GlobalContext = createContext(initialState);

//Provider component:
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions:
  async function getStocks() {
    const response = await axios.get("/api/stocks/");
    dispatch({
      type: "GET_STOCKS",
      payload: response.data.data,
    });
  }
  async function deleteStock(id) {
    await axios.delete(`/api/stocks/${id}`);
    dispatch({
      type: "DELETE_STOCK",
      payload: id,
    });
  }

  async function addStock(stock) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post("/api/stocks/", stock, config);
    dispatch({
      type: "ADD_STOCK",
      payload: response.data.data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        stocks: state.stocks,
        getStocks,
        deleteStock,
        addStock,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
