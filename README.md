# SoloProject

Stock Tracker Dashboard
- Keep track of stocks. Add and remove stocks from your dashboard

Project Specifications
- Shows stock, stock price, quantity, profit/loss, and entry price
- Add and delete stocks from the dashboard
- Shows total profit loss
- Shows individual profit and loss

Programs Used
- HTML and CSS
- Javascript
- React and React Hooks


fetch("https://cloud.iexapis.com/stable/stock/intc/quote?token=pk_474db16c98ae4dfcb050cbf314058d17").then(res=>res.json()).then(data => console.log(data.latestPrice))