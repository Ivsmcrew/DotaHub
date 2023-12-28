import React from "react";
import classes from "./IvsmLogo.module.css";
import logoIcon from "../../assets/icons/logo-icon.png";

const IvsmLogo = function(props) {
  return(
    <div className={classes.logo + ` ${props.className}`}>
      <img className={classes.logoImg} src={logoIcon} alt="logo icon img" />
      <h1 className={classes.logoTitle}>{'<DotaHub/>'}</h1>
    </div>
  )
}

export default IvsmLogo