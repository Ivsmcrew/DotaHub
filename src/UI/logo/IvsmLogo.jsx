import React, { memo } from "react";
import classes from "./IvsmLogo.module.css";
import logoIcon from "../../assets/icons/logo-icon.png";
import { Link } from "react-router-dom";

const IvsmLogo = memo(function IvsmLogo(props) {
  console.log('render');
  return(
    <Link to="/">
      <div onClick={props.onClick} 
           className={classes.logo + ` ${props.className}`}
      >
        <img className={classes.logoImg} 
             src={logoIcon} 
             alt="logo icon img" 
        />
        <h1 className={classes.logoTitle}>{'<DotaHub/>'}</h1>
      </div>
    </Link>
  )
})

export default IvsmLogo