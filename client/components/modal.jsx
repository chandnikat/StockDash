import React, { Component, useContext, useEffect } from "react";
import { GlobalContext } from "../context/gobalState.jsx";



function Modal({ modalState}) {


  return (
    <div className={`modalBackground modalShowing-${modalState}`}>
      <div className="modal-Bg">
        <div className="modal-content"> 
        <div className="modal-close"><span>+</span></div>
            <div className="modal-header">
            Boeing
            </div>
            <div className="modal-body"></div>
        </div>
      </div>
    </div>
  );
}

export default Modal;