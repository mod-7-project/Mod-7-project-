import { useState } from 'react'

import { FaSearch } from 'react-icons/fa'



const Navbar = () => {

    const [input, setInput] = useState('')


 return (
    <>

    <div className='input-wrapper'>
        <FaSearch id='search-icon'/> 
            <input placeholder='Search For Pokemon' 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            /> 

    </div>


    </>
 )


  };
  
  export default Navbar;