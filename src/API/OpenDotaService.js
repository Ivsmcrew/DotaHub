class OpenDotaService {
  static steamCDN1 = 'https://cdn.dota2.com';
  static steamCDN2 = 'https://steamcdn-a.akamaihd.net';
  static openDotaCDN = 'https://api.opendota.com/api/heroStats';

  static async getAllHeroes() {
    try {
      const response = await fetch(this.openDotaCDN);
      return response
    } catch(err) {
      console.log(err.message)
    }   
  }
}

export default OpenDotaService