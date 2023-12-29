import React from "react";
import classes from "./IvsmLogo.module.css";
import logoIcon from "../../assets/icons/logo-icon.png";
import { Link } from "react-router-dom";

const IvsmLogo = function(props) {
  return(
    <Link to="/">
      <div className={classes.logo + ` ${props.className}`}>
        <img className={classes.logoImg} src={logoIcon} alt="logo icon img" />
        <h1 className={classes.logoTitle}>{'<DotaHub/>'}</h1>
      </div>
    </Link>
  )
}

export default IvsmLogo