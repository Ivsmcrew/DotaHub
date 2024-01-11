import React, { useContext } from 'react'
import classes from "./IvsmSidebar.module.css"
import { SidebarContext } from '../../context/context'

function IvsmSidebar() {
  const {isActive, setIsActive} = useContext(SidebarContext);

  function sidebarToggle() {
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
        NAVIGATION
      </aside>
    </>
  )
}

export default IvsmSidebar