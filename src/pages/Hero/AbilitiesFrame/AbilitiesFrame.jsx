import React from 'react'
import classes from './AbilitiesFrame.module.css'
import Stats from '../Stats/Stats'
import Abilities from '../Abilities/Abilities'

function AbilitiesFrame({heroData}) {
  return (
    <div className={classes.abilitiesFrame}>
      <Stats heroData={heroData} />
      <Abilities heroData={heroData} />
    </div>
  )
}

export default AbilitiesFrame