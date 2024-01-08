import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';

function IvsmParallax({dataDepth, backgroundSrc}) {
  const ref = useRef(null);

  useEffect(() => {
    const scene = ref.current;
    new Parallax(scene, {
      relativeInput: true
    })
  }, [])

  return (
    <div ref={ref} className="parallax__backdrop-scene">
      <img data-depth={dataDepth} 
           className="parallax__backdrop-image" 
           src={backgroundSrc} 
           alt='background pic'
      />
    </div>
  )
}

export default IvsmParallax