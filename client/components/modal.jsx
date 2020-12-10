import React, { Component, useContext, useEffect } from "react";
import { GlobalContext } from "../context/gobalState.jsx";


function Modal({ modalState }) {
  return (
    <div className={`modalBackground modalShowing-${modalState}`}>
      <div className="bg-modal">
        {/* <p>Data on ticker</p> */}
      </div>
    </div>
  );
}

export default Modal;
