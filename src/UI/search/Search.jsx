import React from "react";
import classes from "./Search.module.css";

const Search = function() {
  return(
    <input className={classes.search} 
           placeholder="Search by a player, team or ..."
    />
  )
}

export default Search