import React, {useState,useEffect} from 'react'
import { usePrimeContext } from '../context/context';

const QuestionForm = ({answer}) => {

    const {villagers,setVillagers,currentIndex, correct, setCorrect} = usePrimeContext()
    const [currentInput, setCurrentInput] = useState('')

    const handleClick = (e) =>{
        e.preventDefault()
        const [villager_selected] = villagers.filter((_, i) => currentIndex ==i)
        if(answer.toLowerCase() == currentInput.toLowerCase()){
            const villager_not_selected = villagers.filter((_, i) => currentIndex !=i)
            villager_selected.show = !villager_selected.show
            villager_not_selected.splice(currentIndex, 0, villager_selected)
            setVillagers(villager_not_selected)
            setCorrect(prev => prev + 1)
            console.log(correct)
            return
        }
        console.log(villager_selected.name)

    }
  return (
    <div>
        <input type="text" className="answer" 
        value = {currentInput} 
        onChange = {(e)=>{e.preventDefault();setCurrentInput(e.target.value)}}/>
        <button className = 'submit-button'onClick = {(e)=>handleClick(e)}> Submit</button>
    </div>
  )
}

export default QuestionForm