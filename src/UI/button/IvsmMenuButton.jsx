import React from "react";
import classes from "./IvsmMenuButton.module.css";

const IvsmMenuButton = function(props) {
  return(
    <div onClick={props.onClick} className={classes.background + ` ${props.className}`}>
      <div className={classes.ivsmMenuButton}>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </div>
    </div>
  )
}

export default IvsmMenuButton