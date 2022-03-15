import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
const ACNH_url = `https://api.nookipedia.com/villagers?api_key=${process.env.REACT_APP_ACNH_API_KEY}&name=`; 
const country_url = "https://api.api-ninjas.com/v1/geocoding?city="; 
const villager_id_url = 'http://acnhapi.com/v1/villagers/';

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
        getCountries()
        getVillagers()  
    }, [])

    const getVillagers = async () =>{
        const villagerImage = () =>{
            let rand = Math.floor(Math.random()*391)
            axios.get(`${villager_id_url}${rand}`).then(res => {
                const name = res.data.name["name-USen"]
                axios.get(`${ACNH_url}${name}`).then(
                    res => {
                        const dated_modded = {...res.data[0], show: false}
                        setVillagers(prev => [...prev, dated_modded])
                    }
                ).catch(err => console.log(err))
            }).catch(err => console.log(err))
        }
        for(let i = 0; i<10; i++){
            villagerImage()
        }
        
        
    }

    const getCountries = async () =>{
        setLoading(true)
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
              console.log(err, ' error')
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