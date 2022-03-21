import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
const country_url = "https://api.api-ninjas.com/v1/geocoding?city="; 
const json = '/worldcities.json'

const Context = React.createContext()

export const ContextProvider = ({children}) =>{
    const [loading, setLoading] = useState(true)
    const [villagers, setVillagers] = useState([])
    const [cities, setCities] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const [correct, setCorrect] = useState(0)

    useEffect(() =>{
        setLoading(true);
        getCountries();
        getVillagers(); 

    }, [])

    const getVillagers =() =>{
        const villagerImage = () =>{axios.get(`https://animalcrossingserver.herokuapp.com/villagers`)
        .then(res => {
            const dated_modded = {...res.data[0], show: false}
            setVillagers(prev => [...prev, dated_modded])})
        .catch(err => console.log('acnmhapi acnh error'))}
        for(let i = 0; i<10; i++){
            villagerImage()
        }

    }

    const getCountries = () =>{
        if(cities.length >= 10){
            return
        }
        fetch(json).then(
            res => {
            return res.json()
          }).then((data)=>{
            for(let i = 0; i<10; i++){
                let rand = Math.floor(Math.random()*data.length)
                getLatlng(data[rand].city_ascii)
            }
            setLoading(false)
          }).catch(
            err =>
              console.log('country api error')
        )
    }

    const getLatlng = (country) =>{
        axios.get(String(`${country_url}${country}`), {headers: { 'X-Api-Key': process.env.REACT_APP_COUNTRY_API_KEY}})
        .then(res => {
            const {name,latitude,longitude} = res.data[0]
            if(latitude){
                const data = {name,latitude,longitude}
                setCities(prev => [...prev, data])
            }

        }).catch(err => {
            console.log(err)
            setCities([])
            console.log('resetting cities')
            getCountries()

        })
    }

    return(
        <Context.Provider value = {{cities, 
        loading, setLoading, 
        villagers, setVillagers, 
        currentIndex,setCurrentIndex, 
        progress, setProgress, 
        correct, setCorrect}}>
            {children}
        </Context.Provider>
    )
}

export const usePrimeContext = () =>{
    return useContext(Context)
}