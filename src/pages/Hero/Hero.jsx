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
  const [hero, setHero] = useState({});
  const [heroStats, setHeroStats] = useState({});
  const [heroData, setHeroData] = useState({});

  //Data refreshing
  useEffect(() => {
    async function fetchData() {
      setHeroes(await OpenDotaService.getHeroes());
      setHeroesStats(await OpenDotaService.getHeroStats());  
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
    })
  }, [hero, heroStats])

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