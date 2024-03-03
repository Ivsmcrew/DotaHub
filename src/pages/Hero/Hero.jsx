import React from 'react'
import { useParams } from 'react-router-dom'

function Hero() {
  const { id } = useParams();

  return (
    <div className='main'>
      Hero with id {id}
    </div>
  )
}

export default Hero