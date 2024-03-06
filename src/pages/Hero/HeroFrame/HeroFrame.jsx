import React from 'react'
import classes from './HeroFrame.module.css'

function HeroFrame({heroData}) {
  return (
    <div className={classes.heroFrame}>
      <div className={classes.heroFrame__leftPart}
           style={{backgroundImage: `url(${heroData.imgSrc})`}}>
      </div>
      <div className={classes.heroFrame__rightPart}>
        <span className={classes.heroFrame__name}>
          {heroData.name}
        </span>
        <span className={classes.heroFrame__roles}>
          {`${heroData.attackType + ' - ' + heroData.roles}`.toUpperCase()}
        </span>
      </div>
    </div>
  )
}

export default HeroFrame