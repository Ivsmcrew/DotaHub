import React, { useContext } from 'react'
import classes from "./IvsmSidebar.module.css"
import { SidebarContext } from '../../context/context'
import IvsmLogo from '../logo/IvsmLogo';
import { sidebarData } from "./IvsmSidebarData";
import { Link } from 'react-router-dom';

function IvsmSidebar() {
  const {isActive, setIsActive} = useContext(SidebarContext);

  function sidebarToggle() {
    document.documentElement.style.overflow = isActive ? 'visible' : 'hidden'
    setIsActive(!isActive);
  }

  return (
    <>
      <div className={isActive ?
                      `${classes.backLayer} ${classes.backLayer_active}` :
                      `${classes.backLayer}`}
           onClick={sidebarToggle} 
      />         
                      
      <aside className={isActive ?
                      `${classes.ivsmSidebar} ${classes.ivsmSidebar_active}` :
                      `${classes.ivsmSidebar}`}>
        <IvsmLogo className={classes.logo} onClick={sidebarToggle}/>
        <ul className={classes.ivsmSidebar__list}>
          {sidebarData.map((item, index) => {
            return(
                <Link key={index}  to={item.path} onClick={sidebarToggle}>
                  <li className={classes.ivsmSidebar__link}>
                    {item.icon}
                    <span>{item.title}</span>
                  </li>
                </Link>
            )
          })}
        </ul>
      </aside>
    </>
  )
}

export default IvsmSidebar