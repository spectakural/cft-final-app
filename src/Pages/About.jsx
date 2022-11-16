import React from 'react'
import kural from '../Assets/kural.png';
import shiva from '../Assets/shiva.png';
import raghav from '../Assets/raghav.png';


const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='aboutHeader'>
        <p>Get to know us</p>
      </div>
      <div className='aboutImages'>
        <img src={ kural } alt="kural" />
        <img src={ shiva } alt="shiva" />
        <img src={ raghav } alt="raghav" />
      </div>
    </div>
  )
}

export default About