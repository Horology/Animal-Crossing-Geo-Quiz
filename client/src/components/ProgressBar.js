import React from 'react'
import {VscDebugBreakpointLogUnverified, VscDebugBreakpointLog} from "react-icons/vsc";
import { usePrimeContext } from '../context/context';
const ProgressBar = () => {
  const {progress, correct} = usePrimeContext(); 

  if(!progress){
    return(
      <div>Loading</div>
    )
  }


  return (
    <div className = 'progress-bar'>
      {correct >= progress?
      <h2 className = 'congratz'>Congratulations you won!</h2>
      :[...Array(progress)].map((x, i) =>{
        return (
          <>
            {correct >=(i+1)?<VscDebugBreakpointLog key={i} size ={55}/>
            :<VscDebugBreakpointLogUnverified key={i} size ={55}/>}
          </>
        )}
      )} 
    </div>
  )
}

export default ProgressBar