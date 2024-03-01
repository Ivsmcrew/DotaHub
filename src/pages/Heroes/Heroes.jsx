import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import OpenDotaService from "../../API/OpenDotaService";
import classes from "./Heroes.module.css";
import AuxiliaryNav from "../../components/AuxiliaryNav";
import Table from "../../UI/table/Table";
import { format } from "../../utils/math";

const Heroes = function() {
  const [proHeroesDataArr, setProHeroesDataArr] = useState([]);
  const [publicHeroesDataArr, setPublicHeroesDataArr] = useState([]);
  const [turboHeroesDataArr, setTurboHeroesDataArr] = useState([]);
  const [numberOfProMatches, setNumberOfProMatches] = useState(0);
  const [numberOfPublicMatches, setNumberOfPublicMatches] = useState(0);
  const [numberOfTurboMatches, setNumberOfTurboMatches] = useState(0);
  useEffect(() => {
    async function fetchData() {
      setProHeroesDataArr(await OpenDotaService.getProHeroesDataArr());
      setPublicHeroesDataArr(await OpenDotaService.getPublicHeroesDataArr());
      setTurboHeroesDataArr(await OpenDotaService.getTurboHeroesDataArr());
      setNumberOfProMatches(await OpenDotaService.getNumberOfProMatches());
      setNumberOfPublicMatches(await OpenDotaService.getNumberOfPublicMatches());
      setNumberOfTurboMatches(await OpenDotaService.getNumberOfAllTurboMatches());
    }
    fetchData()
  }, [])

  const auxiliaryNavSubtitles = ['HEROES IN PRO MATCHES', 
                                 'HEROES IN PUBLIC MATCHES', 
                                 'HEROES IN TURBO MATCHES'];
  const [navSubtitle, setNavSubtitle] = useState(auxiliaryNavSubtitles[0]);
  const [navNumberMatches, setNavNumberMatches] = useState(numberOfProMatches);
  let location = useLocation();
  useEffect(() => {
    setNavNumberMatches(numberOfProMatches);
    if (location.pathname.includes('pro')) {
      setNavSubtitle(auxiliaryNavSubtitles[0]);
      setNavNumberMatches(numberOfProMatches);
    } else if (location.pathname.includes('public')) {
      setNavSubtitle(auxiliaryNavSubtitles[1]);
      setNavNumberMatches(numberOfPublicMatches);
    } else if (location.pathname.includes('turbo')) {
      setNavSubtitle(auxiliaryNavSubtitles[2]);
      setNavNumberMatches(numberOfTurboMatches);
    }
  }, [location, numberOfProMatches, numberOfPublicMatches, numberOfTurboMatches])

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
  const subRoutes = [
    {path: "", headersArr: proHeadersArr, tableDataArr: proHeroesDataArr},
    {path: "pro", headersArr: proHeadersArr, tableDataArr: proHeroesDataArr},
    {path: "public", headersArr: publicHeadersArr, tableDataArr: publicHeroesDataArr},
    {path: "turbo", headersArr: turboHeadersArr, tableDataArr: turboHeroesDataArr},
  ]
 
  return (
    <main className={classes.main}>
      <div className={classes.content}>

        <header className={classes.heroes_header}>
          <AuxiliaryNav navItems={navItems}/>
          <div className={classes.subtitle}>
            <h3 className={classes.subtitle__h3}>
              {navSubtitle}
            </h3>
            <span className={classes.subtitle__matches}>{format(navNumberMatches)} matches in last 7 days</span>{/* TODO1: get subtitles from router? It needs to check whether we are on a pro or public page(location)*/}
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