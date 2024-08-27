import { useContext, useEffect, useState  } from "react";
import CharacterContext from "../context/context";
import handleFetch from "../utils/fetch";
import { FaSearch } from 'react-icons/fa'

const Search = () => {
    const [input, setInput] = useState('');
    const setPokemon = useContext(CharacterContext).setAllCharacters


    useEffect(() => {
        const doFetch =  async() => {
            const [data, error] = await handleFetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302`)
            if (data.results) setPokemon(data.results.filter(({name})=> name.includes(input)))
        }
    doFetch()
    },[input])


    return (
        <div className="ui search">
          <div className='input-wrapper'>
<FaSearch id='search-icon'/> 
    <input placeholder='Search For Pokemon' 
    value={input} 
    onChange={(e) => setInput(e.target.value)}
    aria-labelledby="Search Pokemon by Name"
    /> 

</div>
        </div>


    )
}


export default Search 
