import React from "react";
import classes from "./IvsmInput.module.css";

const IvsmInput = function(props) {
  return (
    <div className={classes.ivsmInputField + ` ${props.className}`}>
      <label htmlFor={props.id}>
        {props.title}
      </label>
      <input className={classes.ivsmInput}/>
    </div>
  )
}

export default IvsmInput