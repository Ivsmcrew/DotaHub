import React from 'react'
import { Link } from 'react-router-dom'

function HeroCell({id, iconSrc, name}) {
  return (
    <Link to={`heroes/${id}`}>
      <div className='heroCell'>
        <img className='heroCell__icon' src={iconSrc} alt="hero icon" />
        <span className='heroCell__name'>{name + " >"}</span>
      </div>
    </Link>
  )
}

export default HeroCell