import React, { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import OpenDotaService from "../../API/OpenDotaService";
import classes from "./Heroes.module.css";

const Heroes = function() {
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
        <div className={classes.heroes}>
          {isHeroesLoading 
            ? <div>Loading...</div> 
            : heroes.map((item, index) => {
                return (
                  <div className={classes.hero}>
                    <img className={classes.heroIcon} src={'https://steamcdn-a.akamaihd.net' + item.img} alt="hero icon" />
                    <span className={classes.heroName} key={index}>
                      {item.localized_name}
                    </span>
                  </div>
                )
              })        
          }
        </div>
      </div>
    </main>
  )
}

export default Heroes