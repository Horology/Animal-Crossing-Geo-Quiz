import React from 'react'
import QuestionForm from './QuestionForm';
import { usePrimeContext } from '../context/context'
import {createQuestion} from '../utils/questions';
import  Isabelle from '../assets/isabelle.png';
const Questions = () => {
    const {villagers, currentIndex} = usePrimeContext()
    const question = createQuestion(villagers[currentIndex])
    
    
  return (
    <div className='dialog-container'>
      <div className = 'question'>
        {(villagers.length >= 9) && <div>
        
        {villagers[currentIndex].show === true?
        <h2>
          You got this! Let's move on to the next one!
        </h2>: 
        <>
          <h2 className = 'dotted-underline'> Question</h2>
          <h3>{question} </h3>
          <h3> Who am I? Type in my name!</h3>
          <QuestionForm answer = {villagers[currentIndex].name}/>
          
        </>
        }
        <div class="right-point"></div>
        <img className = 'isabelle' src = {Isabelle} />
        </div>}
      </div>
    </div>

  )
}

export default Questions