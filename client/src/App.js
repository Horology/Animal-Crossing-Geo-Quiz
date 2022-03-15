import {Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import LandingPage from './pages/LandingPage';


const PageRouting = () => {
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
