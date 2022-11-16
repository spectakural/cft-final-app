import React from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <div style={styles}>
      <p className = "bannerText">Cloud file transfer</p>
      <p className = "bannerText">system that is</p>
      <div className = "typewriter">
        <Typewriter
          options={{
            strings: ['Fast', 'Secure', 'Reliable'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  )
}

const styles = {
  marginTop: "20px",
  textAlign: "end",
  fontSize: "50px",
  fontWeight: "600"
}

export default Banner