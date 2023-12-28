import React from "react";
import IvsmMenuButton from "../button/IvsmMenuButton";
import IvsmLogo from "../logo/IvsmLogo";
import classes from "./IvsmNavbar.module.css";
import { Link } from "react-router-dom";

const IvsmNavbar = function() {
  return(
    <div className={classes.navBar}>
      <IvsmMenuButton className={classes.menuButton}/>
      <IvsmLogo className={classes.menuLogo}/>
      <div className="navbar__links">
        <Link to='/heroes'>Heroes</Link>
        <Link to='/matches'>Matches</Link>
        <Link to='/teams'>Teams</Link>
      </div>
      <div className="navbar__search"></div>
      <div className="navbar__enter">
        <Link to='/login'>Enter</Link>
      </div>
    </div>
  )
}

export default IvsmNavbar
