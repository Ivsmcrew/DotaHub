import React from 'react'
import classes from './Abilities.module.css'
import talentsIcon from '../../../assets/icons/talents.svg'
import scepterIcon from '../../../assets/icons/scepter.png'
import shardIcon from '../../../assets/icons/shard.png'
import OpenDotaService from '../../../API/OpenDotaService'
import AbilityHint from '../AbilityHint/AbilityHint'

function Abilities({heroData}) {
  function isDataLoaded() {
    if (heroData.abilities) {
      if (heroData.abilities[0]) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  function isHidden(ability) {
    if (ability.behavior == "Hidden") {
      return true
    } else {
      return false
    }
  }

  return (
    <div className={classes.abilities}>
      <div className={`${classes.ability} ${classes.talents}`}>
        <img className={classes.talents__icon} src={talentsIcon} alt="talents tree" />
      </div>
      
      {isDataLoaded() ?
        heroData.abilities.map((item, index) => {
          return(
            isHidden(item) ? 
            null :
            <div key={index} className={`${classes.ability}`}>
              <img className={classes.ability__icon} src={OpenDotaService.steamCDN1 + `${item.img}`} alt="ability" />
              {item.mc ? 
              <div className={classes.mana}>
                {Array.isArray(item.mc) ? 
                item.mc[0] :
                item.mc}
              </div> :
              null} 
              <AbilityHint className={classes.ability__hint} ability={item}/>
            </div>
          ) 
        }) : 
        <div>LOADING</div>}
      <div className={`${classes.ability} ${classes.aghanim}`}>
        <img className={classes.scepter__icon} src={scepterIcon} alt="scepter" />
        <img className={classes.shard__icon} src={shardIcon} alt="shard" />
      </div>
    </div>
  )
}

export default Abilities