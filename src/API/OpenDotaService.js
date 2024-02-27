import classes from "../pages/Heroes/Heroes.module.css";
import { decimalRound } from "../utils/math";

class OpenDotaService {
  static steamCDN1 = 'https://cdn.dota2.com';
  static steamCDN2 = 'https://steamcdn-a.akamaihd.net';
  static openDotaCDN = 'https://api.opendota.com/api';

  //returns heroStats promise
  static async getHeroStats() {
    try {
      let response = await fetch(this.openDotaCDN + '/heroStats');
      let heroStats = await response.json();
      return heroStats
    } catch(err) {
      console.log('Error message: ' + err.message)
    }   
  }

  //returns heroesDataArr promise
  static async getProHeroesDataArr() {
    try {
      const numberOfProMatches = await this.getNumberOfProMatches();
      const heroStatsArr = await this.getHeroStats();
      const heroesDataArr = heroStatsArr.map((item) => {
        return new Map([
          ['heroImg', <img className={classes.heroIcon} src={this.steamCDN1 + item.img} alt="hero icon" />], 
          ['pick', decimalRound(item.pro_pick / numberOfProMatches * 100)], 
          ['ban', decimalRound(item.pro_ban / numberOfProMatches * 100)], 
          ['win', decimalRound((item.pro_win / item.pro_pick) * 100)],
        ])
      })
      return heroesDataArr
    } catch(err) {
      console.log('Error message' + err.message)
    }
  }
  
  //returns match by id promise
  static async getMatchById(id) {
    try {
      const response = await fetch(this.openDotaCDN + `/matches/${id}`)
      const match = await response.json();
      return match
    } catch(err) {
      console.log(err.message)
    }
  }

  //returns promise about pro matches from hero stats endpoint 
  static async getNumberOfProMatches() {
    try {
      const heroes = await this.getHeroStats();
      let numberOfProPicks = 0;
      heroes.forEach((hero) => {
        numberOfProPicks += hero.pro_pick;
      })
      const numberOfProMatches = numberOfProPicks/10;
      return numberOfProMatches
    } catch(err) {
      console.log(err)
    }
  }
}

export default OpenDotaService