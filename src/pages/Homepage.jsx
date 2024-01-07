import React, { useEffect } from "react";
import codeIcon from "../assets/icons/code.png";
import keyboardIcon from "../assets/icons/keyboard.png";
import freeIcon from "../assets/icons/testimonials.png";
import Parallax from 'parallax-js';
import background from '../assets/images/background1.jpg';

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
          <div className="homepage__feature">
            <img className="homepage__img" src={codeIcon} alt="icon of a feature" />
            <h3 className="homepage__h3">Public source code</h3>
            <p className="homepage__p">The entire project code is freely available and is open to everyone to improve and modifications.</p>
          </div>
          <div className="homepage__feature">
            <img className="homepage__img" src={keyboardIcon} alt="icon of a feature" />
            <h3 className="homepage__h3">Improve abilities</h3>
            <p className="homepage__p">A huge amount of data and statistics on all your favorite professional and not only players, teams and matches. Pull, analyze, win.</p>
          </div>
          <div className="homepage__feature">
            <img className="homepage__img" src={freeIcon} alt="icon of a feature" />
            <h3 className="homepage__h3">Free to use</h3>
            <p className="homepage__p">Since this is my pet project, of course it is free! And in general this is a carrier from the Opendota website</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage