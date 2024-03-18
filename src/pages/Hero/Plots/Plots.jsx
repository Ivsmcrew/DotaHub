import React, { useEffect, useState } from 'react'
import IPlot from '../../../UI/plot/IPlot';
import classes from './Plots.module.css';

function Plots({data, width}) {
  const TITLES = {
    gold_per_min: 'GOLD PER MINUTE',
    xp_per_min: 'EXPERIENCE PER MINUTE',
    kills_per_min: 'KILLS PER MINUTE',
    last_hits_per_min: 'KREEPS PER MINUTE',
    hero_damage_per_min: 'HERO DAMAGE PER MINUTE',
    hero_healing_per_min: 'HEALING PER MINUTE'
  }
  const LINE_COLORS = ['rgb(221, 37, 37)', 'rgb(221, 141, 37)', 'rgb(221, 218, 37)', 'rgb(101, 221, 37)', 'rgb(37, 221, 197)', 'rgb(243, 97, 221)'];
  const GRAD_COLORS_END = ['rgba(221, 37, 37, 0)', 'rgba(221, 141, 37, 0)', 'rgba(221, 218, 37, 0)', 'rgba(101, 221, 37, 0)', 'rgba(37, 221, 197, 0)', 'rgba(243, 97, 221, 0)'];
  const GRAD_COLORS_START = ['rgb(221, 37, 37)', 'rgb(221, 141, 37)', 'rgb(221, 218, 37)', 'rgb(101, 221, 37)', 'rgb(37, 221, 197)', 'rgb(243, 97, 221)'];

  const [plotsData, setPlotsData] = useState({});
  const [plotWidth, setPlotWidth] = useState();
  const [plotHeight, setPlotHeight] = useState();

  useEffect(() => {
    if (data) {
      if (data.gold_per_min) {
        setPlotsData(data)
      }
    }
  }, [data])
  useEffect(() => {
    if (width) {
      if (width > 1200) {
        setPlotWidth( (width / 3) - 20 )
        setPlotHeight( ((width / 3) - 20) * 3 / 4 )
      } else if (width > 900 && width <= 1200) {
        setPlotWidth( (width / 3) - 20 )
        setPlotHeight( ((width / 3) - 20) * 3 / 4 )
      } else if (width > 500 && width <= 900) {
        setPlotWidth( (width / 2) - 20 )
        setPlotHeight( ((width / 2) - 20) * 3 / 4 )
      } else if (width <= 500){
        setPlotWidth( (width / 1) - 20 )
        setPlotHeight( ((width / 1) - 20) * 3 / 4 )
      }
    }
  }, [width])

  return (
    plotsData ? 
      <>
        {Object.keys(plotsData).map((item, index) => {
          if (item !== 'tower_damage') {
            return (
              <div key={index}>
                <IPlot data={data[item]} 
                       dataWidth={plotWidth}
                       dataHeight={plotHeight}
                       dataLineColor={LINE_COLORS[index]}
                       gradStartColor={GRAD_COLORS_START[index]}
                       gradEndColor={GRAD_COLORS_END[index]}/>
                <div className={classes.title}>{TITLES[item]}</div>
              </div>
            )
          }
        })}
      </> :
      null
  )
}

export default Plots