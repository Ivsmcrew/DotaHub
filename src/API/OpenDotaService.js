class OpenDotaService {
  static steamCDN1 = 'https://cdn.dota2.com';
  static steamCDN2 = 'https://steamcdn-a.akamaihd.net';
  static openDotaCDN = 'https://api.opendota.com/api';

  static async getHeroStats() {
    try {
      const response = await fetch(this.openDotaCDN + '/heroStats');
      return response
    } catch(err) {
      console.log(err.message)
    }   
  }

  static async getHeroesDataArr() {
    try {
      // код получения данных через getHeroStats
    } catch(err) {
      console.log(err.message)
    }
  }
}

export default OpenDotaService