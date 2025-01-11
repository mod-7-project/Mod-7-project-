import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CharacterProvider from './context/pokemonProvider.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(


 <CharacterProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
 </CharacterProvider>
  
)
