import React from 'react'
import classes from './AghanimHint.module.css'

function AghanimHint({className, aghanim}) {
  function isDataLoaded() {
    if (aghanim) {
      return true
    } else {
      return false
    }
  }

  return (
    isDataLoaded() ?
    <div className={`${classes.hint} ${className}`}>
      <div className={classes.title}>
        <span className={classes.title__text}>
          Aghanim's scepter
        </span>
      </div>
      <div className={classes.skill}>
        ABILITY: <span className={classes.value}>{aghanim.scepter_skill_name}</span>
      </div>
      <div className={classes.description}>
        DESCRIPTION: <span className={classes.value}>{aghanim.scepter_desc}</span>
      </div>
    </div> :
    <div>Loading</div>
  )
}

export default AghanimHint