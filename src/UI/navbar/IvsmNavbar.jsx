import React, { useCallback, useContext, useMemo } from "react";
import IvsmMenuButton from "../button/IvsmMenuButton";
import IvsmLogo from "../logo/IvsmLogo";
import classes from "./IvsmNavbar.module.css";
import { NavLink } from "react-router-dom";
import Search from "../search/Search";
import IvsmEnter from "../enter/IvsmEnter";
import { navbarData } from "./NavbarData";
import { SidebarContext } from "../../context/context";

const IvsmNavbar = function() {
  const {isActive, setIsActive} = useContext(SidebarContext); 

  function sidebarToggle() {
    document.documentElement.style.overflow = isActive ? 'visible' : 'hidden'
    setIsActive(!isActive);
  }
  const getLinks = useCallback(() => {
    return(
      navbarData.map((item, index) => {
        return (
          <NavLink key={index} 
                className={({isActive}) => isActive ? `${classes.link} ${classes.active}` : classes.link} 
                to={item.to}
          >
            {item.title}
          </NavLink>
        )
      })
    )
  }, []) 
  const logoClasses = useMemo(() => {
    return classes.menuLogo
  }, [])

  return(
    <header className={classes.header}>
      <div className={classes.content}>
        <IvsmMenuButton className={classes.menuButton} 
                        onClick={sidebarToggle}
        />
        <IvsmLogo className={logoClasses}/>
        <div className={classes.links}>
          {getLinks()}
        </div>
        <Search />
        <IvsmEnter />
      </div>
    </header>
  )
}

export default IvsmNavbar
