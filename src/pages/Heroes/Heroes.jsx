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
    <div className={classes.main}>
      {isHeroesLoading 
      ? <div>Loading...</div> 
      : heroes.map((item, index) => {
          return (
            <div key={index}>
              {item.localized_name}
            </div>
          )
        })        
      }
    </div>
  )
}

export default Heroes