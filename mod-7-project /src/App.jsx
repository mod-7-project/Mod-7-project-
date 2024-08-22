// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import Navbar from './component/navbar'
// import NotFoundPage from './pages/NotFoundPage'
// import {Routes, Route} from 'react'
// import CharCollection from './component/PokemonCollection'
// import CharCard from './component/PokemonCard'
// import MoreInfo from './pages/MoreInfoPage'

// import HomePage from './pages/Homepage'


// function App() {


//   return (

// <div className='app'>
// <Routes>

//   <Route path='/' element={<HomePage/>}/>
//   <Route path='/*' element={<NotFoundPage/>}/>

// </Routes>

// </div>



//   )
// }

// export default App


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
      </Routes>
    </div>

    
  );
}

export default App;
