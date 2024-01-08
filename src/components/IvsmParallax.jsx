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
    <div ref={ref} className="homepage__backdrop-scene">
      <img data-depth={dataDepth} 
           className="homepage__backdrop-image" 
           src={backgroundSrc} 
           alt='background pic'
      />
    </div>
  )
}

export default IvsmParallax