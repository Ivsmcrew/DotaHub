import React from 'react'
import classes from './Abilities.module.css'
import talentsIcon from '../../../assets/icons/talents.svg'
import scepterIcon from '../../../assets/icons/scepter.png'
import shardIcon from '../../../assets/icons/shard.png'

function Abilities(heroData) {
  return (
    <div className={classes.abilities}>
      <div className={`${classes.ability} ${classes.talents}`}>
        <img className={classes.talents__icon} src={talentsIcon} alt="talents tree" />
      </div>
      <div className={`${classes.ability}`}>
        <div className="mana"></div>
      </div>
      <div className={`${classes.ability}`}>
        <div className="mana"></div>
      </div>
      <div className={`${classes.ability}`}>
        <div className="mana"></div>
      </div>
      <div className={`${classes.ability} ${classes.aghanim}`}>
        <img className={classes.scepter__icon} src={scepterIcon} alt="scepter" />
        <img className={classes.shard__icon} src={shardIcon} alt="shard" />
      </div>
    </div>
  )
}

export default Abilities