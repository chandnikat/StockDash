module.exports = {
    getStocks: (request, response, next) => {
      try {
        response.locals.stocksArray = data;
        return next();
      } catch (error) {
        return next({
          message: { err: "Error occurred in getStocks" },
        });
      }
    },
  
    postStocks: (request, response, next) => {
        try {
            stocks.push(request.body);
            return next();
          } catch (error) {
            return next({
              message: { err: "Error occurred in postStocks"},
            });
          }
    },
  };