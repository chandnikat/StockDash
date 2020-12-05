export default (state, action) => {
  switch (action.type) {
    case "DELETE_STOCK":
      return {
        ...state,
        stocks: state.stocks.filter(stock => stock.id !== action.payload)
      }
    default:
      return state;
  }
};
