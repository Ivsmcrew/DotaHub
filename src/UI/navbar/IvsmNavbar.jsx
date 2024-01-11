import React, { useContext } from "react";
import IvsmMenuButton from "../button/IvsmMenuButton";
import IvsmLogo from "../logo/IvsmLogo";
import classes from "./IvsmNavbar.module.css";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import IvsmEnter from "../enter/IvsmEnter";
import { navbarData } from "./NavbarData";
import { SidebarContext } from "../../context/context";

const IvsmNavbar = function() {
  const {isActive, setIsActive} = useContext(SidebarContext); 

  function sidebarToggle() {
    setIsActive(!isActive);
  }

  return(
    <div className={classes.navBar}>
      <IvsmMenuButton className={classes.menuButton} 
                      onClick={sidebarToggle}
      />
      <IvsmLogo className={classes.menuLogo}/>
      <div className={classes.links}>
        {navbarData.map((item, index) => {
          return (
            <Link key={index} 
                  className={classes.link} 
                  to={item.to}
            >
              {item.title}
            </Link>
          )
        })}
      </div>
      <Search />
      <IvsmEnter />
    </div>
  )
}

export default IvsmNavbar
