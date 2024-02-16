import React from "react";
import OpenDotaService from "../../API/OpenDotaService";
import classes from "./Heroes.module.css";
import AuxiliaryNav from "../../components/AuxiliaryNav";
import Table from "../../UI/table/Table";

const Heroes = function() {
  //_______________________________________________________VARIABLE________________________________________
  const navItems = [
    {to: '/heroes/pro', title: 'PRO'},
    {to: '/heroes/public', title: 'PUBLIC'},
    {to: '/heroes/turbo', title: 'TURBO'},
  ]
  const headersArr = ['HERO', 'PRO PICK+BAN(%)', 'PRO BAN(%)', 'PRO WIN(%)'];
  const heroesDataArr = [
    new Map([
      ['heroImg', <img className={classes.heroIcon} src={OpenDotaService.steamCDN1 + '/apps/dota2/images/dota_react/heroes/antimage.png?'} alt="hero icon" />], ['pick', 'pick%'], ['ban', 'ban%'], ['win', 'win%']
    ]),
    new Map([
      ['heroImg', <img className={classes.heroIcon} src={OpenDotaService.steamCDN1 + '/apps/dota2/images/dota_react/heroes/antimage.png?'} alt="hero icon" />], ['pick', 'pick%'], ['ban', 'ban%'], ['win', 'win%']
    ]),
    new Map([
      ['heroImg', <img className={classes.heroIcon} src={OpenDotaService.steamCDN1 + '/apps/dota2/images/dota_react/heroes/antimage.png?'} alt="hero icon" />], ['pick', 'pick%'], ['ban', 'ban%'], ['win', 'win%']
    ]),
    new Map([
      ['heroImg', <img className={classes.heroIcon} src={OpenDotaService.steamCDN1 + '/apps/dota2/images/dota_react/heroes/antimage.png?'} alt="hero icon" />], ['pick', 'pick%'], ['ban', 'ban%'], ['win', 'win%']
    ]),
    new Map([
      ['heroImg', <img className={classes.heroIcon} src={OpenDotaService.steamCDN1 + '/apps/dota2/images/dota_react/heroes/antimage.png?'} alt="hero icon" />], ['pick', 'pick%'], ['ban', 'ban%'], ['win', 'win%']
    ])
  ]

  //________________________________________________________STATES________________________________________

 

  //______________________________________________________FUNCTIONS________________________________________
  

  //______________________________________________________COMPONENT_________________________________________
  return (
    <main className={classes.main}>
      <div className={classes.content}>
        <header className={classes.heroes_header}>
          <AuxiliaryNav navItems={navItems}/>
          <div className={classes.subtitle}>
            <h3 className={classes.subtitle__h3}>
              HEROES IN PRO MATCHES
            </h3>
            <span className={classes.subtitle__matches}>2k matches in last 7 days</span>
          </div>
        </header>

        <div className={classes.heroes}>
          <Table headersArr={headersArr} tableDataArr={heroesDataArr}/>           
        </div>
      </div>
    </main>
  )
}

export default Heroes