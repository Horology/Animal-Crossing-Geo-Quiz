import React from 'react';
import {ImCross} from 'react-icons/im';
import leaf from '../assets/leaf.png';
const Navbar = () => {
  return (
    <>
      <h1 className = 'title'>
        <ImCross size={45}/>
        Animal Crossing: Find the Villagers!
        <ImCross size={45}/></h1>
        <div className = 'underline-circle'>
      </div>
      <img className = 'logo' src={leaf}/>
    </>
  )
}

export default Navbar