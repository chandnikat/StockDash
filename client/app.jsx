import React, { Component } from "react";
import { render } from "react-dom";
import styles from "./scss/application.scss"

//Dashboard COMPONENT:
class App extends Component {
  render() {
    return (
      <div>
        <h1 id="title">Stock Tracker Dashboard</h1>
        <input id="ticker" placeholder="Ticker"></input>
        <input id="shares" placeholder="# of Shares"></input>
        <input id="entryPrice" placeholder="Entry Price"></input>
        <button id="stock-button">Submit</button>
        <div id="stock-box"></div>
   
      </div>
    );
  }
}






//Render:
render(<App />, document.querySelector('#root'));