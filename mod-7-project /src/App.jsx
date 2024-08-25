import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import NotFoundPage from './pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

import MoreInfo from './pages/MoreInfoPage';
import HomePage from './pages/Homepage';
import Navbar from './component/navbar';
import TeamPage from './pages/MakeTeamPage';


function App() {
  return (
    <>
      <Navbar />
      <div className='app'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/*' element={<NotFoundPage />} />
          <Route path='/more-info/:id' element={<MoreInfo />} />
          <Route path='/TeamPage' element={<TeamPage />} /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
