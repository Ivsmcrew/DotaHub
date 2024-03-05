import React from 'react'
import { useParams } from 'react-router-dom'

function Hero() {
  const { id } = useParams();

  return (
    <div className='main'>
      <div className="content">

        <div className="about">
          <div className="panel">
            <div className="heroFrame">
              <img src="" alt="" />
              <span className="name"></span>
              <span className="roles"></span>
            </div>
            <div className="abilitiesFrame">
              <div className="stats">
                <div className="strength">
                  <div className="circle"></div>
                  <span className='value'></span>
                </div>
                <div className="agility">
                  <div className="circle"></div>
                  <span className='value'></span>
                </div>
                <div className="intelligence">
                  <div className="circle"></div>
                  <span className='value'></span>
                </div>
              </div>
            </div>
            <div className="abilities">
              <div className="talents">
                <img src="" alt="" />
              </div>
              <div className="skill">
                <img src="" alt="" />
                <div className="mana"></div>
              </div>
              <div className="skill">
                <img src="" alt="" />
                <div className="mana"></div>
              </div>
              <div className="skill">
                <img src="" alt="" />
                <div className="mana"></div>
              </div>
              <div className="skill">
                <img src="" alt="" />
                <div className="mana"></div>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="table"></div>
          </div>
        </div>

        <div className="statistics">
          <div className="auxiliaryNav">
            <ul>
              <li>Top players</li>
              <li>Benchmarks</li>
              <li>Recent</li>
              <li>Matchups</li>
              <li>Items</li>
            </ul>
          </div>
          <div className="table">
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero