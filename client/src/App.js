import {Routes, Route, useNavigate} from 'react-router-dom';
import React, {useEffect} from 'react';
import Main from './pages/Main';
import LandingPage from './pages/LandingPage';
import { usePrimeContext } from './context/context';


const PageRouting = () => {
  const {loading} = usePrimeContext()
  const navigate = useNavigate()
  useEffect(() =>{
    if(loading){
      navigate('/landing');
    }
  })
  return(
    <Routes>
      <Route path = '/landing' element = {<LandingPage />} />
      <Route path = '/*' element = {<Main />} />
    </Routes>
  )
}

function App() {
  return (
    <PageRouting />
  );
}

export default App;
