export default (state, action) => {
  switch (action.type) {
    case "DELETE_STOCK":
      return {
        ...state,
        stocks: state.stocks.filter((stock) => stock.id !== action.payload),
      };
    case "ADD_STOCK":
      return {
        ...state,
        stocks: [action.payload, ...state.stocks],
      };
    default:
      return state;
  }
};
