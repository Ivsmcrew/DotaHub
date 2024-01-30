import React, { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import OpenDotaService from "../../API/OpenDotaService";
import classes from "./Heroes.module.css";
import AuxiliaryNav from "../../components/AuxiliaryNav";
import Table from "../../components/Table";

const Heroes = function() {
  //_______________________________________________________VARIABLE________________________________________
  const navItems = [
    {to: '/heroes/pro', title: 'PRO'},
    {to: '/heroes/public', title: 'PUBLIC'},
    {to: '/heroes/turbo', title: 'TURBO'},
  ]
  let headersArr = ['hero', 'propick', 'proban', 'prowin'];
  let heroesDataArr = [
    new Map([
      ['hero1', 'heroComponent1'], ['pick', 'pick%'], ['ban', 'ban%'], ['win', 'win%']
    ]),
    new Map([
      ['hero2', 'heroComponent2'], ['pick', 'pick%'], ['ban', 'ban%'], ['win', 'win%']
    ]),
    new Map([
      ['hero3', 'heroComponent3'], ['pick', 'pick%'], ['ban', 'ban%'], ['win', 'win%']
    ]),
  ]; 

  //________________________________________________________STATES________________________________________
  const [heroes, setHeroes] = useState([]);
  const [getHeroes, isHeroesLoading, heroesError] = useFetching(async () => {
    const response = await OpenDotaService.getAllHeroes();
    setHeroes(await response.json())
  })

  //______________________________________________________FUNCTIONS________________________________________
  useEffect(() => {
    getHeroes();
  }, [])

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
          <Table headersArr={headersArr} heroesDataArr={heroesDataArr}/>

          {/* {isHeroesLoading 
            ? <div>Loading...</div> 
            : heroes.map((item, index) => {
                return (
                  <div key={index} className={classes.hero}>
                    <img className={classes.heroIcon} src={OpenDotaService.steamCDN1 + item.img} alt="hero icon" />
                    <span className={classes.heroName}>
                      {item.localized_name}
                    </span>
                  </div>
                )
              })        
          } */}
        </div>
      </div>
    </main>
  )
}

export default Heroes