import React from 'react'
import classes from "./AbilityHint.module.css"
import OpenDotaService from '../../../API/OpenDotaService'

function AbilityHint({className, ability}) {
  function returnValue(value) {
    let str = '';
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (index == value.length - 1) {
          str = str + item
        } else {
          str = str + item + ' / '
        }
      })
    } else {
      str = value
    }
    return str
  }

  return (
    <div className={`${classes.hint} ${className}`}>
      <div className={classes.title}>
        <img className={classes.title__img} 
             src={OpenDotaService.steamCDN1 + ability.img} 
             alt="hero spell icon" />
        <span className={classes.title__text}>
          {ability.dname}
        </span>
      </div>

      <div className={classes.type}>
        {ability.behavior ?
        <div>TARGET: <span className={classes.value}>{ability.behavior}</span></div> : 
        null}
        {ability.dmg_type ?
        <div>DAMAGE TYPE: <span className={classes.value}>{ability.dmg_type}</span></div> : 
        null}
        {ability.bkbpierce ?
        <div>IGNORES SPELL IMMUNITY: <span className={classes.value}>{ability.bkbpierce}</span></div> : 
        null}
      </div>

      <div className={classes.delimiter} />

      <div className={classes.description}>
        {ability.desc}
      </div>

      <div className={classes.delimiter} />

      {ability.attrib.length ?
        <>
          <div className={classes.stats}>
            {ability.attrib.map((item) => {
              return(
                <div key={item.key}>
                  <span>{item.header} </span>
                  <span className={classes.value}>{returnValue(item.value)}</span>
                </div>
              )
            })}
          </div>
          <div className={classes.delimiter} />
        </> :
        null
      }

      <div className={classes.cost}>
        <div className={classes.cost__indicator} />
        {ability.mc ? 
          returnValue(ability.mc) :
          'No need mana'
        }
      </div>
    </div>
  )
}

export default AbilityHint