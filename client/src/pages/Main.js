import React, {useEffect} from 'react';
import '../App.css';
import ProgressBar from '../components/ProgressBar';
import MapWrapper from '../components/MapWrapper';
import Navbar from '../components/Navbar';
import '../dist/index.css';
import background from '../assets/background.png';
import { usePrimeContext } from '../context/context';


import Questions from '../components/Questions';


const Main = () => {
  const{loading, villagers} = usePrimeContext();


  if(loading | villagers.length <=9){
    return(
      <div className="loading">
        Loading
      </div>
    )
  }
  return (
    <div className="App">
        <header>
        </header>
        <Navbar />
        <div className = 'map-wrapper'>
        <MapWrapper />
        <ProgressBar />
        <div className = 'background'><img src = {background} /></div>
        <Questions />
        </div>



    </div>
  )
}

export default Main