import { useContext, useEffect, useState  } from "react";
import CharacterContext from "../context/context";
import handleFetch from "../utils/fetch";

const Filter = () => {
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
            <div className="ui icon input">
                <input className="prompt" placeholder="Search by Name..." value={input} onChange={(e)=> setInput(e.target.value)} />
                <i className="search icon" />
            </div>
        </div>
    )
}


export default Filter
