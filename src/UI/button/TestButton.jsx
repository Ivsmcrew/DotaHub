import React from 'react';
import classes from "./TestButton.module.css";

function ButtonScrollUp({onClick}) {


  return (
    <button className={classes.sort} onClick={onClick}>
      SORT
    </button>
  )
}

export default ButtonScrollUp