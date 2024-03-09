import React from 'react'
import classes from './TalentsHint.module.css'

function TalentsHint({className, talents}) {
  function isDataLoaded() {
    if (talents) {
      if (talents[0]) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  return (
    <div className={`${classes.hint} ${className}`}>
      <div className={classes.filter}>
        {isDataLoaded() ? 
          <div className={classes.content}>
            <div className={classes.content__row}>
              <span className={classes.content__cell}>{talents[6].dname}</span>
              <span className={classes.level}>25</span>
              <span className={classes.content__cell}>{talents[7].dname}</span>
            </div>
            <div className={classes.content__row}>
              <span className={classes.content__cell}>{talents[4].dname}</span>
                <span className={classes.level}>20</span>
              <span className={classes.content__cell}>{talents[5].dname}</span>
            </div>
            <div className={classes.content__row}>
              <span className={classes.content__cell}>{talents[2].dname}</span>
                <span className={classes.level}>15</span>
              <span className={classes.content__cell}>{talents[3].dname}</span>
            </div>
            <div className={classes.content__row}>
              <span className={classes.content__cell}>{talents[0].dname}</span>
                <span className={classes.level}>10</span>
              <span className={classes.content__cell}>{talents[1].dname}</span>
            </div>
          </div> :
          null
        }
      </div>
    </div>
  )
}

export default TalentsHint