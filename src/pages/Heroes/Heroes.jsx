import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import OpenDotaService from "../../API/OpenDotaService";
import classes from "./Heroes.module.css";
import AuxiliaryNav from "../../components/AuxiliaryNav";
import Table from "../../UI/table/Table";
import { format } from "../../utils/math";

const Heroes = function() {
  //________________________________________________________STATES________________________________________
  const [proHeroesDataArr, setProHeroesDataArr] = useState([]);
  const [publicHeroesDataArr, setPublicHeroesDataArr] = useState([]);
  const [turboHeroesDataArr, setTurboHeroesDataArr] = useState([]);
  const [numberOfProMatches, setNumberOfProMatches] = useState(0);
  useEffect(() => {
    async function fetchData() {
      setProHeroesDataArr(await OpenDotaService.getProHeroesDataArr());
      setPublicHeroesDataArr(await OpenDotaService.getPublicHeroesDataArr());
      setTurboHeroesDataArr(await OpenDotaService.getTurboHeroesDataArr());
      setNumberOfProMatches(await OpenDotaService.getNumberOfProMatches());
    }
    fetchData()
  }, [])
  
  //_______________________________________________________VARIABLE________________________________________
  const navItems = [
    {path: 'pro', title: 'PRO'},
    {path: 'public', title: 'PUBLIC'},
    {path: 'turbo', title: 'TURBO'},
  ]
  const proHeadersArr = ['HERO', 'PRO PICK %(pcs)', 'PRO BAN %(pcs)', 'PRO WIN %(pcs)'];
  const publicHeadersArr = ['HERO', 
                            'OVERALL WIN %(pcs)', 
                            'OVERALL PICK %(pcs)', 
                            'IMM/DIV/ANC WIN %(pcs)', 
                            'IMM/DIV/ANC PICK %(pcs)', 
                            'LEGEND/ARCH WIN %(pcs)',
                            'LEGEND/ARCH PICK %(pcs)',
                            'CRU/GUARD/HER WIN %(pcs)',
                            'CRU/GUARD/HER PICK %(pcs)'];
  const turboHeadersArr = ['HERO', 'TURBO PICK %(pcs)', 'TURBO WIN %(pcs)'];
  const auxiliaryNavSubtitles = ['HEROES IN PRO MATCHES', 
                                 'HEROES IN PUBLIC MATCHES', 
                                 'HEROES IN TURBO MATCHES']//TODO1: get subtitles from router?
  const subRoutes = [
    {path: "", headersArr: proHeadersArr, tableDataArr: proHeroesDataArr},
    {path: "pro", headersArr: proHeadersArr, tableDataArr: proHeroesDataArr},
    {path: "public", headersArr: publicHeadersArr, tableDataArr: publicHeroesDataArr},
    {path: "turbo", headersArr: turboHeadersArr, tableDataArr: turboHeroesDataArr},
  ]
 
  //______________________________________________________COMPONENT_________________________________________
  return (
    <main className={classes.main}>
      <div className={classes.content}>

        <header className={classes.heroes_header}>
          <AuxiliaryNav navItems={navItems}/>
          <div className={classes.subtitle}>
            <h3 className={classes.subtitle__h3}>
              {auxiliaryNavSubtitles[0]} {/* TODO1: get subtitles from router? It needs to check whether we are on a pro or public page(location)*/}
            </h3>
            <span className={classes.subtitle__matches}>{format(numberOfProMatches)} matches in last 7 days</span>{/* TODO1: get subtitles from router? It needs to check whether we are on a pro or public page(location)*/}
          </div>
        </header>

        <Routes>
          {subRoutes.map((route, index) => {
            return(
              <Route 
                key={index}
                path={route.path} 
                element={
                  <div className={classes.heroes}>
                    <Table headersArr={route.headersArr} tableDataArr={route.tableDataArr}/>           
                  </div>
                } 
              />
            )
          })}
        </Routes>
      </div>
    </main>
  )
}

export default Heroes