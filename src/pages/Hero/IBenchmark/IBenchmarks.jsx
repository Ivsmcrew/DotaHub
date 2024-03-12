import React, { useEffect, useState } from 'react'
import classes from './IBenchmarks.module.css'
import Table from '../../../UI/table/Table'
import { roundWithAcc } from '../../../utils/math';

function IBenchmarks({fetchedData}) {
  const benchmarksHeadersArr = [
    {sortParam: 'percents', text: 'PERCENTS'},
    {sortParam: 'gold', text: 'GOLD/M'}, 
    {sortParam: 'exp', text: 'EXP/M'},
    {sortParam: 'kills', text: 'KILLS/M'},
    {sortParam: 'kreeps', text: 'KREEPS/M'},
    {sortParam: 'damage', text: 'DMG/M'},
    {sortParam: 'heal', text: 'HEAL/M'},
  ];

  const [data, setData] = useState({});
  const [benchmarksDataArr, setBenchmarkDataArr] = useState({});

  useEffect(() => {
    setData(fetchedData.result)
  }, [fetchedData])
  useEffect(() => {
    if (isDataLoaded()) {
      getFormatData()
    } 
  }, [data])

  function getFormatData() {
    let formatData = [];
    let percents = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.99];

    percents.forEach((item) => {
      let percents = item * 100;
      let gold = data['gold_per_min'].find(goldItem => goldItem.percentile == item).value;
      let exp = data['xp_per_min'].find(expItem => expItem.percentile == item).value;
      let kills = data['kills_per_min'].find(killsItem => killsItem.percentile == item).value;
      let kreeps = data['last_hits_per_min'].find(kreepsItem => kreepsItem.percentile == item).value;
      let damage = data['hero_damage_per_min'].find(damage => damage.percentile == item).value;
      let heal = data['hero_healing_per_min'].find(heal => heal.percentile == item).value;

      formatData.push(
        new Map([
          ['percents', <div percents={percents}>{roundWithAcc(percents)} %</div>],
          ['gold', <div percents={gold}>{roundWithAcc(gold)}</div>],
          ['exp', <div percents={exp}>{roundWithAcc(exp)}</div>],
          ['kills', <div percents={kills}>{roundWithAcc(kills)}</div>],
          ['kreeps', <div percents={kreeps}>{roundWithAcc(kreeps)}</div>],
          ['damage', <div percents={damage}>{roundWithAcc(damage)}</div>],
          ['heal', <div percents={heal}>{roundWithAcc(heal)}</div>],
        ])
      )
    })
  
    setBenchmarkDataArr(formatData)
  }

  function isDataLoaded() {
    if (data) {
      if (data['gold_per_min']) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  function isDataFormatted() {
    if (benchmarksDataArr.length) {
      return true
    } else {
      return false
    }
  }

  return (
    isDataFormatted() ?
    <div className={classes.benchmarks}>
      <div className={classes.plots} />
      <Table headersDataArr={benchmarksHeadersArr} tableDataArr={benchmarksDataArr} setTableData={setBenchmarkDataArr}/>
    </div> :
    null
  )
}

export default IBenchmarks