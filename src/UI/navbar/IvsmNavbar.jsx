import React from "react";
import IvsmMenuButton from "../button/IvsmMenuButton";
import IvsmLogo from "../logo/IvsmLogo";
import classes from "./IvsmNavbar.module.css";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import IvsmEnter from "../enter/IvsmEnter";

const IvsmNavbar = function() {
  return(
    <div className={classes.navBar}>
      <IvsmMenuButton className={classes.menuButton}/>
      <IvsmLogo className={classes.menuLogo}/>
      <div className={classes.links}>
        <Link className={classes.link} to='/heroes'>Heroes</Link>
        <Link className={classes.link} to='/matches'>Matches</Link>
        <Link className={classes.link} to='/teams'>Teams</Link>
      </div>
      <Search />
      <IvsmEnter />
    </div>
  )
}

export default IvsmNavbar
