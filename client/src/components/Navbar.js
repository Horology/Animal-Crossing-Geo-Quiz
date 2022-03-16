import React from 'react';
import {ImCross} from 'react-icons/im';
import leaf from '../assets/leaf.png';
const Navbar = () => {
  return (
    <>
      <h1 className = 'title'>
        <ImCross size={45}/>
        <div className = 'title-text'>
          Animal Crossing: Find the Villagers!
          <img className = 'logo' src={leaf}/>
        </div>
        <ImCross size={45}/></h1>
        <div className = 'underline-circle'>
      </div>

    </>
  )
}

export default Navbar