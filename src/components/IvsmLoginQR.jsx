import React from "react";
import qrPng from '../assets/images/qr.png';

const IvsmLoginQR = function() {
  function getQR() {
    return qrPng
  }

  return(
    <div className="qr">
      <h4 className="h4">ENTER WITH QR-CODE</h4>
      <div className="qr__background">
        <img src={getQR()} alt="Unique qr code" />
      </div>
    </div>
  )
}

export default IvsmLoginQR