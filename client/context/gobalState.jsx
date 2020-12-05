import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer.jsx";

//Initial state:
const initialState = {
  stocks: [
    {
      id: 1,
      ticker: "AAPl",
      price: 114,
      qty: 36,
      profitLoss: 15,
      entryPrice: 115,
    },
    {
      id: 2,
      ticker: "GOOGL",
      price: 1141,
      qty: 87,
      profitLoss: -10,
      entryPrice: 1140,
    },
    {
      id: 3,
      ticker: "INTC",
      price: 50,
      qty: 14,
      profitLoss: 10,
      entryPrice: 51,
    },
    {
      id: 4,
      ticker: "CSCO",
      price: 46,
      qty: 360,
      profitLoss: -100,
      entryPrice: 47,
    },
  ],
};

//Create context:
export const GlobalContext = createContext(initialState);

//Provider component:
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions:
  function deleteStock(id) {
    dispatch({
      type: "DELETE_STOCK",
      payload: id,
    });
  }

  function addStock(stock) {
    dispatch({
      type: "ADD_STOCK",
      payload: stock,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        stocks: state.stocks,
        deleteStock,
        addStock,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
