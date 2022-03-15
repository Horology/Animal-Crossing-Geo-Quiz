import React from 'react'
import plane from '../assets/plane.png';
import  sky from '../assets/sky_with_clouds.mp4';

const LandingPage = () => {
  return (
    <div className = 'landing-wrapper'>
      <video src = {sky} autoPlay loop muted type = 'video/mp4'/>
      <img className = 'plane' src = {plane} />
    </div>
  )
}

export default LandingPage