export default (state, action) => {
  switch (action.type) {
    case "GET_STOCKS":
      return {
        ...state,
        stocks: action.payload,
      };
    case "DELETE_STOCK":
      return {
        ...state,
        stocks: state.stocks.filter((stock) => stock._id !== action.payload),
      };
    case "ADD_STOCK":
      return {
        ...state,
        stocks: [ action.payload, ...state.stocks,],
      };
    case "STOCKS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
