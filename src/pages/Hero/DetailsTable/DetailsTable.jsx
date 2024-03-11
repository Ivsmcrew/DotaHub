import React from 'react'
import classes from './DetailsTable.module.css'

function DetailsTable({heroStats}) {
  function isDataLoaded() {
    if (heroStats) {
      if (heroStats.id) {
        return true
      } else {
        console.log('HeroStats data isnt loaded for Details Table')
        return false
      }
    } else {
      console.log('HeroStats data isnt loaded for Details Table')
      return false
    }
  }

  return (
    <>
      {isDataLoaded() ?
        <table className={classes.table}>
          <tbody>
            <tr className={classes.row}>
              <td className={classes.cell}>
                <div className={classes.data}>
                  BASE ATTACK: {heroStats.base_attack_min} - {heroStats.base_attack_max}
                </div>
              </td>
              <td className={classes.cell}>
                <div className={classes.data}>
                  BASE HEALTH: {heroStats.base_health}
                </div>
              </td>
              <td className={classes.cell}>
                <div className={classes.data}>
                  ATTACK TIME: {heroStats.base_attack_time}
                </div>
              </td>
            </tr>

            <tr className={classes.row}>
              <td className={classes.cell}>
                <div className={classes.data}>
                  ATTACK RATE: {heroStats.attack_rate}
                </div>
              </td>
              <td className={classes.cell}>
                <div className={classes.data}>
                  DAY VISION: {heroStats.day_vision}
                </div>
              </td>
              <td className={classes.cell}>
                <div className={classes.data}>
                  NIGHT VISION: {heroStats.night_vision}
                </div>
              </td>
            </tr>

            <tr className={classes.row}>
              <td className={classes.cell}>
                <div className={classes.data}>
                  BASE ARMOR: {heroStats.base_armor}
                </div>
              </td>
              <td className={classes.cell}>
                <div className={classes.data}>
                  ATTACK RANGE: {heroStats.attack_range}
                </div>
              </td>
              <td className={classes.cell}>
                <div className={classes.data}>
                  MOVE SPEED: {heroStats.move_speed}
                </div>
              </td>
            </tr>

            <tr className={classes.row}>
              <td className={classes.cell}>
                <div className={classes.data}>
                  BASE HEALTH REGEN: {heroStats.base_health_regen}
                </div>
              </td>
              <td className={classes.cell}>
                <div className={classes.data}>
                  BASE MANA REGEN: {heroStats.base_mana_regen}
                </div>
              </td>
              <td className={classes.cell}>
                <div className={classes.data}>
                  BASE MANA: {heroStats.base_mana}
                </div>
              </td>
            </tr>
          </tbody>
        </table> :
       null
      }
    </>
  ) 
}

export default DetailsTable