import './App.css';

import NotFoundPage from './pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

import MoreInfo from './pages/MoreInfoPage';
import HomePage from './pages/Homepage';
import Navbar from './component/navbar';
import TeamPage from './pages/MakeTeamPage';
import AllPokemon from './pages/allpokemon';


function App() {
  return (
    <>
      <Navbar />
      <div className='app'>
        <Routes>
          <Route path='/Mod-7-project-/' element={<HomePage />} />
          <Route path='/AllPokemon' element={<AllPokemon />} />
          <Route path='/more-info/:id' element={<MoreInfo />} />
          <Route path='/TeamPage' element={<TeamPage />} /> 
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
