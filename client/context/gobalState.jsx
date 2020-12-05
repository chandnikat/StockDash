import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer.jsx";


//Initial state:
const initialState = {
  stocks: [
    { id: 1, ticker: "AAPl", qty: 36, entryPrice: 115 },
    { id: 2, ticker: "GOOGL", qty: 10, entryPrice: 1140 },
    { id: 3, ticker: "INTC", qty: 52, entryPrice: 51 },
    { id: 4, ticker: "CSCO", qty: 75, entryPrice: 47 },
  ],
};

//Create context:
export const GlobalContext = createContext(initialState);

//Provider component:
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        stocks: state.stocks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
