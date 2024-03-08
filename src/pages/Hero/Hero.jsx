import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeroFrame from './HeroFrame/HeroFrame';
import OpenDotaService from '../../API/OpenDotaService';
import classes from './Hero.module.css';
import AbilitiesFrame from './AbilitiesFrame/AbilitiesFrame';

function Hero() {
  //States
  const { id } = useParams();
  const [heroes, setHeroes] = useState([]);
  const [heroesStats, setHeroesStats] = useState([]);
  const [abilityTitles, setAbilityTitles] = useState({});
  const [abilities, setAbilities] = useState({});
  const [hero, setHero] = useState({});
  const [heroStats, setHeroStats] = useState({});
  const [heroData, setHeroData] = useState({});
  const [heroAbilityTitles, setHeroAbilityTitles] = useState({abilities: [], talents: []});
  const [heroAbilities, setHeroAbilities] = useState({abilities: [], talents: []});

  //Data refreshing
  useEffect(() => {
    async function fetchData() {
      setHeroes(await OpenDotaService.getHeroes());
      setHeroesStats(await OpenDotaService.getHeroStats());  
      setAbilityTitles(await OpenDotaService.getAbilityTitles());
      setAbilities(await OpenDotaService.getAbilities());
    }
    fetchData()
  }, [])

  useEffect(() => {
    for (let hero of heroes) {
      if (hero.id == id) {
        setHero(hero)
      }
    }
    for (let heroStats of heroesStats) {
      if (heroStats.id == id) {
        setHeroStats(heroStats)
      }
    } 
  }, [heroes, heroesStats])

  useEffect(() => {
    setHeroAbilityTitles(abilityTitles[heroStats.name]);
  }, [abilityTitles])

  useEffect(() => {
    if (heroAbilityTitles) {
      let heroAbilities = {abilities:[], talents:[]};
      heroAbilityTitles.abilities.forEach((abilityTitle) => {
        heroAbilities.abilities.push(abilities[abilityTitle]) 
      })
      heroAbilityTitles.talents.forEach((talent) => {
        heroAbilities.talents.push(abilities[talent.name])
      })
      setHeroAbilities(heroAbilities)
    }
  }, [abilities, heroAbilityTitles])

  useEffect(() => {
    setHeroData({
      'imgSrc': OpenDotaService.steamCDN1 + heroStats.img,
      'alt': hero.localized_name,
      'name': hero.localized_name,
      'attackType': hero.attack_type,
      'roles': hero.roles,
      'baseStr': heroStats.base_str,
      'baseAgi': heroStats.base_agi,
      'baseInt': heroStats.base_int,
      'strGain': heroStats.str_gain,
      'agiGain': heroStats.agi_gain,
      'intGain': heroStats.int_gain,
      'abilities': heroAbilities.abilities,
      'talents': heroAbilities.talents,
    })
  }, [hero, heroStats, heroAbilities])

  //Component
  return (
    <div className='main'>
      <div className={classes.content}>

        <div className={classes.about}>
          <div className={classes.panel} style={{backgroundImage: `url(${heroData.imgSrc})`}}>
            <HeroFrame heroData={heroData} />
            <AbilitiesFrame heroData={heroData} />
          </div>
          <div className="details">
            <div className="table"></div>
          </div>
        </div>

        <div className="statistics">
          <div className="auxiliaryNav">
            <ul>
              <li>Top players</li>
              <li>Benchmarks</li>
              <li>Recent</li>
              <li>Matchups</li>
              <li>Items</li>
            </ul>
          </div>
          <div className="table">
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero