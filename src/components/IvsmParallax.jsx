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
    <div className="parallax">
      <div ref={ref} className="parallax__backdrop-scene">
        <div data-depth={dataDepth} 
             style={{backgroundImage: `url(${backgroundSrc})`, 
                     width: `100%`, 
                     height: `100%`, 
                     filter: `brightness(40%)`, 
                     backgroundPosition: `center`, 
                     backgroundRepeat: `no-repeat`,
                     backgroundSize: `cover`}}>
        </div>
      </div>
    </div>
  )
}

export default IvsmParallax