import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import HeroFrame from './HeroFrame/HeroFrame';
import OpenDotaService from '../../API/OpenDotaService';
import classes from './Hero.module.css';
import AbilitiesFrame from './AbilitiesFrame/AbilitiesFrame';
import DetailsTable from './DetailsTable/DetailsTable';
import AuxiliaryNav from '../../components/AuxiliaryNav';
import ButtonScrollUp from '../../UI/button/ButtonScrollUp';
import IBenchmarks from './IBenchmark/IBenchmarks';
import Recent from './Recent/Recent';
import Matchups from './Matchups/Matchups';

function Hero() {
  //Constants
  const NAVITEMS = [
    {path: 'benchmarks', title: 'BENCHMARKS'},
    {path: 'recent', title: 'RECENT'},
    {path: 'matchups', title: 'MATHUPS'},
  ]

  //States
  const { id } = useParams();
  const [scroll, setScroll] = useState(0);
  const [heroes, setHeroes] = useState([]);
  const [heroesStats, setHeroesStats] = useState([]);
  const [abilityTitles, setAbilityTitles] = useState({});
  const [abilities, setAbilities] = useState({});
  const [hero, setHero] = useState({});
  const [heroStats, setHeroStats] = useState({});
  const [heroData, setHeroData] = useState({});
  const [heroAbilityTitles, setHeroAbilityTitles] = useState({abilities: [], talents: []});
  const [heroAbilities, setHeroAbilities] = useState({abilities: [], talents: []});
  const [aghanimTitles, setAghanimTitles] = useState([]);
  const [heroAghanim, setHeroAghanim] = useState({});
  const [benchmarksData, setBenchmarksData] = useState({hero_id: null, result: {}});

  //Data refreshing
  useEffect(() => {
    async function fetchData() {
      setHeroes(await OpenDotaService.getHeroes());
      setHeroesStats(await OpenDotaService.getHeroStats());  
      setAbilityTitles(await OpenDotaService.getAbilityTitles());
      setAbilities(await OpenDotaService.getAbilities());
      setAghanimTitles(await OpenDotaService.getAghanimTitles());
      setBenchmarksData(await OpenDotaService.getBenchmarks(id));
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
    if (aghanimTitles.length) {
      aghanimTitles.forEach((item) => {
        if (item.hero_id == id) {
          setHeroAghanim(item)
        }
      })
    }
  }, [aghanimTitles])

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
      'aghanim': heroAghanim
    })
  }, [hero, heroStats, heroAbilities, heroAghanim])

  //Functions
  const subRoutes = [
    {path: "", element: <IBenchmarks fetchedData={benchmarksData} />},
    {path: "benchmarks", element: <IBenchmarks fetchedData={benchmarksData} />},
    {path: "recent", element: <Recent />},
    {path: "matchups", element: <Matchups />}
  ]
  window.addEventListener('scroll', () => {
    setScroll(window.scrollY)
  })

  //Component
  return (
    <div className='main'>
      <div className={classes.content}>

        <div className={classes.about}>
          <div className={classes.panel} style={{backgroundImage: `url(${heroData.imgSrc})`}}>
            <HeroFrame heroData={heroData} />
            <AbilitiesFrame heroData={heroData} />
          </div>
          <div className={classes.details}>
            <DetailsTable heroStats={heroStats}/>
          </div>
        </div>

        <div className={classes.statistics}>
          <header className={classes.hero__header}>
            <AuxiliaryNav navItems={NAVITEMS}/>
          </header>
          <Routes>
            {subRoutes.map((route, index) => {
              return(
                <Route key={index}
                       path={route.path}
                       element={route.element}/>
              )
            })}
          </Routes>
          <ButtonScrollUp scroll={scroll}/>
        </div>

      </div>
    </div>
  )
}

export default Hero