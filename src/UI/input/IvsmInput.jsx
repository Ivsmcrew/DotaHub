import React from "react";
import classes from "./IvsmInput.module.css";

const IvsmInput = function(props) {
  return (
    <div className={classes.ivsmInputField + ` ${props.className}`}>
      <label htmlFor={props.id}>
        {props.title}
      </label>
      <input id={props.id} className={classes.ivsmInput} {...props}/>
    </div>
  )
}

export default IvsmInput