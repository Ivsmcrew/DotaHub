import classes from "../pages/Heroes/Heroes.module.css";
import { format, roundWithAcc } from "../utils/math";

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

  //returns proHeroesDataArr promise
  static async getProHeroesDataArr() {
    try {
      const numberOfProMatches = await this.getNumberOfProMatches();
      const heroStatsArr = await this.getHeroStats();
      const heroesDataArr = heroStatsArr.map((item) => {
        return new Map([
          ['heroImg', <img className={classes.heroIcon} src={this.steamCDN1 + item.img} alt="hero icon" />], 
          ['pick', roundWithAcc(item.pro_pick / numberOfProMatches * 100)], 
          ['ban', roundWithAcc(item.pro_ban / numberOfProMatches * 100)], 
          ['win', roundWithAcc((item.pro_win / item.pro_pick) * 100)],
        ])
      })
      return heroesDataArr
    } catch(err) {
      console.log('Error message' + err.message)
    }
  }

  //TODO: returns publicHeroesDataArr promise
  static async getPublicHeroesDataArr() {    
    try {
      let numberOfHeroCruMatches;
      let numberOfHeroLegendMatches;
      let numberOfHeroImmMatches;
      let overallHeroMatches;
      let numberOfCruWin;
      let numberOfLegendWin;
      let numberOfImmWin;
      let overallWin;
      let numberOfAllPublicMatches = await this.getNumberOfPublicMatches();
      let numberOfAllPublicImmMatches = await this.getNumberOfPublicImmMatches();
      let numberOfAllPublicArchMatches = await this.getNumberOfPublicArchMatches();
      let numberOfAllPublicCruMatches = await this.getNumberOfPublicCruMatches();
      const heroStatsArr = await this.getHeroStats();

      const heroesDataArr = heroStatsArr.map((item) => {
        numberOfHeroCruMatches = item["1_pick"] + item["2_pick"] + item["3_pick"];
        numberOfHeroLegendMatches = item["4_pick"] + item["5_pick"];
        numberOfHeroImmMatches = item["6_pick"] + item["7_pick"] + item["8_pick"];
        overallHeroMatches = numberOfHeroCruMatches + numberOfHeroLegendMatches + numberOfHeroImmMatches;

        numberOfCruWin = item["1_win"] + item["2_win"] + item["3_win"];
        numberOfLegendWin = item["4_win"] + item["5_win"];
        numberOfImmWin = item["6_win"] + item["7_win"] + item["8_win"];
        overallWin = numberOfCruWin + numberOfLegendWin + numberOfImmWin;

        return new Map([
          ['heroImg', <img className={classes.heroIcon} src={this.steamCDN1 + item.img} alt="hero icon" />],
          ['overallWin', roundWithAcc(overallWin / overallHeroMatches*100)],
          ['overallPick', roundWithAcc(overallHeroMatches / numberOfAllPublicMatches*100)],
          ['ImmDivAncWin', roundWithAcc(numberOfImmWin / numberOfHeroImmMatches*100)],
          ['ImmDivAncPick', roundWithAcc(numberOfHeroImmMatches / numberOfAllPublicImmMatches*100)],
          ['LegendArchWin', roundWithAcc(numberOfLegendWin / numberOfHeroLegendMatches*100)],
          ['LegendArchPick', roundWithAcc(numberOfHeroLegendMatches / numberOfAllPublicArchMatches*100)],
          ['CruGuardHerWin', roundWithAcc(numberOfCruWin / numberOfHeroCruMatches*100)],
          ['CruGuardHerPick', roundWithAcc(numberOfHeroCruMatches / numberOfAllPublicCruMatches*100)]
        ])
      })

      return heroesDataArr
    } catch(err) {
      console.log('Error message' + err.message)
    }
  }

  //TODO: returns turboHeroesDataArr promise
  static async getTurboHeroesDataArr() {
    try {
      let numberOfAllTurboMatches = await this.getNumberOfAllTurboMatches();
      const heroStatsArr = await this.getHeroStats();

      const heroesDataArr = heroStatsArr.map((item) => {
        return new Map([
          ['heroImg', <img className={classes.heroIcon} src={this.steamCDN1 + item.img} alt="hero icon" />],
          ['turboPick', roundWithAcc(item.turbo_picks / numberOfAllTurboMatches * 100)],
          ['turboWin', roundWithAcc(item.turbo_wins / item.turbo_picks * 100)]
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

  //returns promise about public matches from hero stats endpoint 
  static async getNumberOfPublicMatches() {
    try {
      const heroes = await this.getHeroStats();
      let numberOfPubPicks = 0;
      heroes.forEach((item) => {
        numberOfPubPicks += item["1_pick"] + item["2_pick"] + item["3_pick"] + item["4_pick"] + item["5_pick"] + item["6_pick"] + item["7_pick"] + item["8_pick"];;
      })
      const numberOfPubMatches = numberOfPubPicks/10;
      return numberOfPubMatches
    } catch(err) {
      console.log(err)
    }
  }

  //returns promise about all public matches of Imm/Div/Anc
  static async getNumberOfPublicImmMatches() {
    try {
      const heroes = await this.getHeroStats();
      let numberOfPubImmPicks = 0;
      heroes.forEach((item) => {
        numberOfPubImmPicks += item["6_pick"] + item["7_pick"] + item["8_pick"];;
      })
      const numberOfPubImmMatches = numberOfPubImmPicks/10;
      return numberOfPubImmMatches
    } catch(err) {
      console.log(err)
    }
  }

  //returns promise about all public matches of Legend/Arch
  static async getNumberOfPublicArchMatches() {
    try {
      const heroes = await this.getHeroStats();
      let numberOfPubArchPicks = 0;
      heroes.forEach((item) => {
        numberOfPubArchPicks += item["4_pick"] + item["5_pick"];
      })
      const numberOfPubArchMatches = numberOfPubArchPicks/10;
      return numberOfPubArchMatches
    } catch(err) {
      console.log(err)
    }
  }

  //returns promise about all public matches of Cru/Guard/Her
  static async getNumberOfPublicCruMatches() {
    try {
      const heroes = await this.getHeroStats();
      let numberOfPubCruPicks = 0;
      heroes.forEach((item) => {
        numberOfPubCruPicks += item["1_pick"] + item["2_pick"] + item["3_pick"];;
      })
      const numberOfPubCruMatches = numberOfPubCruPicks/10;
      return numberOfPubCruMatches
    } catch(err) {
      console.log(err)
    }
  }

  static async getNumberOfAllTurboMatches() {
    try {
      const heroes = await this.getHeroStats();
      let numberOfTurboPicks = 0;
      heroes.forEach((hero) => {
        numberOfTurboPicks += hero.turbo_picks;
      })
      const numberOfTurboMatches = numberOfTurboPicks/10;
      return numberOfTurboMatches
    } catch(err) {
      console.log(err)
    } 
  }
}

export default OpenDotaService