import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import NotFoundPage from './pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

import MoreInfo from './pages/MoreInfoPage';
import HomePage from './pages/Homepage';

function App() {
  return (
    <div className='app'>
  
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/*' element={<NotFoundPage />} />
        <Route path="/more-info/:id" element={<MoreInfo/>}/>
      </Routes>
    </div>

    
  );
}

export default App;
