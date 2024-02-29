import React from 'react'

function Indicator({fullness}) {
  const right = 100 - fullness;
  const startHue = 15;
  const endHue = 140;
  const unitOfHue = (endHue - startHue) / 100; //for one percent of fullness
  const hue = unitOfHue * fullness;
  return (
    <div className="indicator">
      <div className="indicator__background"></div>
      <div className="indicator__fullness" 
           style={{right: right + '%', backgroundColor: `hsl(${hue}, 70%, 47%)`}}></div>
    </div>
  )
}

export default Indicator