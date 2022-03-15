import React, {useState, useEffect} from 'react';
import L from 'leaflet'; 
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

import { usePrimeContext } from '../context/context';

const DefaultIcon = () =>{
  return L.icon({
    iconUrl: require('../assets/silhoutte.png'),
    iconSize: [40, 50]
  })
}

function MapWrapper() {
  const {cities, setLoading, villagers, setVillagers, setCurrentIndex, progress, setProgress} = usePrimeContext()

  useEffect(() => {
    if(cities.length >=9){
      setLoading(false)
      setProgress(villagers.length)
      console.log(progress)
    }

  }, [cities])

  function Icon(index) {
    return L.icon({
      iconUrl: `${index.image_url}`,
      iconSize: [40, 50]
    })
  }

  const onMarkerClick = (e,index) => {
    setCurrentIndex(index)
  }


  return  (
    <MapContainer style={{ height: '50vh',
     width: '80vw', 
     borderRadius: '2rem',
     borderColor: 'white',
     border: '.5vw solid white', }} 
     center={[51.505, -0.09]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {(cities.length >= 9 ) && cities.map((city, index) =>{
        const latlng = [parseFloat(city.latitude), parseFloat(city.longitude)]
        return(
          <Marker position={latlng} eventHandlers = {{ click: (e) => {onMarkerClick(e,index)}}}
          icon = {villagers[index].show?Icon(villagers[index]): DefaultIcon()} >
            <Popup>
              {villagers[index].phrase}
            </Popup>
          </Marker>
        )
      })}
    
    </MapContainer>
  ) 
}

export default React.memo(MapWrapper)


