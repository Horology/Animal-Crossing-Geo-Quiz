import React from 'react';
import { Link } from 'react-router-dom';
import plane from '../assets/plane.png';
import  sky from '../assets/sky_with_clouds.mp4';
import  icon from '../assets/isabelle-icon.png';
import { usePrimeContext } from '../context/context';

const LandingPage = () => {
  const {loading} = usePrimeContext(); 
  return (
    <div className = 'landing-wrapper'>
      <video className = 'video' src = {sky} autoPlay loop muted type = 'video/mp4'/>
      <img className = 'plane' src = {plane} />
      <p className = 'text-container'> 
        Helle islander, Your villagers are all enjoying their vacations around the world 
        and now don't want to stay at your island anymore. You have to convince them that
        to go back to your island! To do that, you have to convince them that you know them
        on a personal level. Given a prompt, you will be asked to guess who they are. Get all 
        of them right to bring them back to your island!
      </p>
      {loading?<button className="next-button"> Loading</button> :<Link to = '/' ><button className="next-button"> Click to Continue</button></Link>}
      <div className = 'isabelle-container'> 
        <img className = 'isabelle-icon' src = {icon}/>
        <div className = 'container-cursor'></div>
      </div>
      
    </div>
  )
}

export default LandingPage