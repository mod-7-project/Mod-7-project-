import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import NotFoundPage from '../pages/NotFoundPage';
import Search from './filter';


const Navbar = () => {


 return (
    <>

    <nav>
        
        <Link to='/'> <h1>Home</h1></Link>
    </nav>



    </>
 )


  };
  
  export default Navbar;