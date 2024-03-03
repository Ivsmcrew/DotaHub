import React from 'react';
import classes from "./ButtonScrollUp.module.css";

function ButtonScrollUp({scroll}) {
  function scrollUp() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
		}
  }

  return (
    <button className={scroll > 500 ? `${classes.scrollUp} ${classes.scrollUp_active}` : `${classes.scrollUp}`} 
            onClick={scrollUp}>
      &#9650;
    </button>
  )
}

export default ButtonScrollUp