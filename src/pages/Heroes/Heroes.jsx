import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import OpenDotaService from "../../API/OpenDotaService";
import classes from "./Heroes.module.css";
import AuxiliaryNav from "../../components/AuxiliaryNav";
import Table from "../../UI/table/Table";
import { format } from "../../utils/math";
import ButtonScrollUp from "../../UI/button/ButtonScrollUp";

const Heroes = function() {
  //_______________________CONSTANTS__________________________
  const navItems = [
    {path: 'pro', title: 'PRO'},
    {path: 'public', title: 'PUBLIC'},
    {path: 'turbo', title: 'TURBO'},
  ]
  const proHeadersArr = [{sortParam: 'heroCell', text: 'HERO'},
                         {sortParam: 'pick', text: 'PRO PICK %(pcs)'}, 
                         {sortParam: 'ban', text: 'PRO BAN %(pcs)'},
                         {sortParam: 'win', text: 'PRO WIN %(pcs)'}
                        ];
  const publicHeadersArr = [{sortParam: 'heroCell', text: 'HERO'},
                            {sortParam: 'overallWin', text: 'OVERALL WIN %(pcs)'},
                            {sortParam: 'overallPick', text: 'OVERALL PICK %(pcs)'},
                            {sortParam: 'ImmDivAncWin', text: 'IMM/DIV/ANC WIN %(pcs)'},
                            {sortParam: 'ImmDivAncPick', text: 'IMM/DIV/ANC PICK %(pcs)'},
                            {sortParam: 'LegendArchWin', text: 'LEGEND/ARCH WIN %(pcs)'},
                            {sortParam: 'LegendArchPick', text: 'LEGEND/ARCH PICK %(pcs)'},
                            {sortParam: 'CruGuardHerWin', text: 'CRU/GUARD/HER WIN %(pcs)'},
                            {sortParam: 'CruGuardHerPick', text: 'CRU/GUARD/HER PICK %(pcs)'},
                           ];
  const turboHeadersArr = [{sortParam: 'heroCell', text: 'HERO'},
                           {sortParam: 'turboPick', text: 'TURBO PICK %(pcs)'},
                           {sortParam: 'turboWin', text: 'TURBO WIN %(pcs)'},
                          ];
  const auxiliaryNavSubtitles = ['HEROES IN PRO MATCHES', 
                                 'HEROES IN PUBLIC MATCHES', 
                                 'HEROES IN TURBO MATCHES'];
 
  //_______________________STATES__________________________
  const [scroll, setScroll] = useState(0);
  const [proHeroesDataArr, setProHeroesDataArr] = useState([]);
  const [publicHeroesDataArr, setPublicHeroesDataArr] = useState([]);
  const [turboHeroesDataArr, setTurboHeroesDataArr] = useState([]);
  const [numberOfProMatches, setNumberOfProMatches] = useState(0);
  const [numberOfPublicMatches, setNumberOfPublicMatches] = useState(0);
  const [numberOfTurboMatches, setNumberOfTurboMatches] = useState(0);
  const [navSubtitle, setNavSubtitle] = useState(auxiliaryNavSubtitles[0]);
  const [navNumberMatches, setNavNumberMatches] = useState(numberOfProMatches);

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

  //_______________________EFFECTS__________________________
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

  //_______________________FUNCTIONS__________________________
  const subRoutes = [
    {path: "", headersArr: proHeadersArr, tableDataArr: proHeroesDataArr, setTableData: setProHeroesDataArr},
    {path: "pro", headersArr: proHeadersArr, tableDataArr: proHeroesDataArr, setTableData: setProHeroesDataArr},
    {path: "public", headersArr: publicHeadersArr, tableDataArr: publicHeroesDataArr, setTableData: setPublicHeroesDataArr},
    {path: "turbo", headersArr: turboHeadersArr, tableDataArr: turboHeroesDataArr, setTableData: setTurboHeroesDataArr},
  ]
 
  window.addEventListener('scroll', () => {
    setScroll(window.scrollY)
  })

  //_______________________COMPONENT__________________________
  return (
    <main className={classes.main}>
      <div className={classes.content}>

        <header className={classes.heroes_header}>
          <AuxiliaryNav navItems={navItems}/>
          <div className={classes.subtitle}>
            <h3 className={classes.subtitle__h3}>
              {navSubtitle}
            </h3>
            <span className={classes.subtitle__matches}>{format(navNumberMatches)} matches in last 7 days</span>
          </div>
        </header>

        <Routes>
          {subRoutes.map((route, index) => {
            return(
              <Route 
                key={index}
                path={route.path} 
                element={
                  <Table headersDataArr={route.headersArr} tableDataArr={route.tableDataArr} setTableData={route.setTableData}/>                 
                } 
              />
            )
          })}
        </Routes>

        <ButtonScrollUp scroll={scroll}/>
      </div>
    </main>
  )
}

export default Heroes