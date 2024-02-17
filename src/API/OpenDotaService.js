import classes from "../pages/Heroes/Heroes.module.css";

class OpenDotaService {
  static gamesQuantity = 2000;
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
  static async getHeroesDataArr() {
    try {
      const heroStatsArr = await this.getHeroStats();
      const heroesDataArr = heroStatsArr.map((item) => {
        return new Map([
          ['heroImg', <img className={classes.heroIcon} src={this.steamCDN1 + item.img} alt="hero icon" />], 
          ['pick', Math.round(item.pro_pick / this.gamesQuantity * 100)], 
          ['ban', Math.round(item.pro_ban / this.gamesQuantity * 100)], 
          ['win', Math.round((item.pro_win / item.pro_pick) * 100)],
        ])
      })
      return heroesDataArr
    } catch(err) {
      console.log('Error message' + err.message)
    }
  }
}

export default OpenDotaService