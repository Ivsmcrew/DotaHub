import React from 'react';
import classes from './Stats.module.css';

function Stats({heroData}) {
  return (
    <div className={classes.stats}>
      <div className={classes.stat}>
        <div className={`${classes.circle} ${classes.red}`}></div>
        <span className={classes.value}>
          {heroData.baseStr + ' + ' + heroData.strGain}
        </span>
      </div>
      <div className={classes.stat}>
        <div className={`${classes.circle} ${classes.green}`}></div>
        <span className={classes.value}>
          {heroData.baseAgi + ' + ' + heroData.agiGain}
        </span>
      </div>
      <div className={classes.stat}>
        <div className={`${classes.circle} ${classes.blue}`}></div>
        <span className={classes.value}>
          {heroData.baseInt + ' + ' + heroData.intGain}
        </span>
      </div>
    </div>
  )
}

export default Stats