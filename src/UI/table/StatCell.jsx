import React from 'react'
import Indicator from './Indicator'

function StatCell({percents, pieces}) {
  return (
    <div className='statCell'>
      <div className='statCell__value'>
        <span className='statCell__percents'>{percents}</span>
        <span className='statCell__pieces'>{'(' + pieces + ')'}</span>
      </div>
      <Indicator fullness={percents}/>
    </div>
  )
}

export default StatCell