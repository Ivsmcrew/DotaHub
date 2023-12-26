import React from "react";
import classes from "./IvsmButton.module.css";

const MyButton = function({children, ...props}) {
  return(
    <button className={classes.ivsmButton + ` ${props.className}`}>
      {children}
    </button>
  )
}

export default MyButton