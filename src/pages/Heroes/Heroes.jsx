import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import OpenDotaService from "../../API/OpenDotaService";
import classes from "./Heroes.module.css";
import AuxiliaryNav from "../../components/AuxiliaryNav";
import Table from "../../UI/table/Table";

const Heroes = function() {
  
  //_______________________________________________________VARIABLE________________________________________
  const navItems = [
    {path: 'pro', title: 'PRO'},
    {path: 'public', title: 'PUBLIC'},
    {path: 'turbo', title: 'TURBO'},
  ]
  const headersArr = ['HERO', 'PRO PICK(%)', 'PRO BAN(%)', 'PRO WIN(%)'];

  //________________________________________________________STATES________________________________________
  const [heroesDataArr, setHeroesDataArr] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setHeroesDataArr(await OpenDotaService.getHeroesDataArr());
    }
    fetchData()
  }, [])
 
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

        <Routes>
          <Route 
            path="" 
            element={
              <div className={classes.heroes}>
                <Table headersArr={headersArr} tableDataArr={heroesDataArr}/>           
              </div>
            } 
          />
          <Route 
            path="pro" 
            element={
              <div className={classes.heroes}>
                <Table headersArr={headersArr} tableDataArr={heroesDataArr}/>           
              </div>
            } 
          />
          <Route 
            path="public" 
            element={
              <div className={classes.heroes}>
                <p>public</p>          
              </div>
            } 
          />
          <Route 
            path="turbo"
            element={
              <div className={classes.heroes}>
                <p>turbo</p>          
              </div>
            } 
          />
        </Routes>
      </div>
    </main>
  )
}

export default Heroes