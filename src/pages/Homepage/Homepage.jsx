import React, { useEffect } from "react";
import background from '../../assets/images/background1.jpg';
import Parallax from 'parallax-js';
import { homepageFeaturesData } from "./HomepageData";

const Homepage = function() {
  useEffect(() => {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true
    });
  }, [])

  return (
    <div className="main">
      <div className="homepage__backdrop-scene" id="scene">
        <img data-depth="0.05" className="homepage__backdrop-image" src={background} alt="" />
      </div>

      <div className="homepage__content">

        <h2 className="homepage__h2">DotaHub</h2>

        <h3 className="homepage__h3">Information platform of the Dota 2 in elegant form</h3>

        <div className="homepage__features">
          {homepageFeaturesData.map((item, index) => {
            return(
              <div key={index} className="homepage__feature">
                <img className="homepage__img" src={item.iconSrc} alt="icon of a feature" />
                <h3 className="homepage__h3">{item.title}</h3>
                <p className="homepage__p">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Homepage