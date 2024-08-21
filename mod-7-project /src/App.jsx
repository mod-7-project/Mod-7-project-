import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './component/navbar'
import NotFoundPage from './pages/NotFoundPage'
import {Routes, Route} from 'react'
import CharCollection from './component/charCollection'

function App() {
  const [count, setCount] = useState(0)

  return (


    <>
{/* <Navbar/>  */}
{/* <Routes> */}
  {/* <Route path='/' element={<Home/>}></Route> */}
  {/* <Route path='/NotFoundPage' element={<NotFoundPage/>}></Route> */}

{/* </Routes> */}

<CharCollection/>
   
  <h1>Hello World !!!</h1>
    </>
  )
}

export default App
