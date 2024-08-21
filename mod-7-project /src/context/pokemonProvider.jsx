import { useState, useEffect} from "react";
import handleFetch from "../utils/fetch";
import CharacterContext from "./context";



const CharacterProvider = ({ children }) => {
    const [allCharacters, setAllCharacters] = useState([]);
    const [error, setError] = useState('')

    // TODO: use useEffect to fetch data from the local JSON server (remember to start JSON server!)
    useEffect(() => {
        // Function to handle the fetching of GIFs
        const doFetch = async () => {
            // Calling the handleFetch function to get data from the Giphy API
            const [data, error] = await handleFetch(`https://pokeapi.co/api/v2/pokemon`);
            console.log(data)
            // If data is successfully fetched, update the data state
            if (data) setAllCharacters(data.results);
            console.log(data)
            // If an error occurs, update the error state
            if (error) setError(error.message);
            // console.log(data)

        }
        doFetch(); // Trigger the fetch operation
    }, []); // Empty dependency array ensures this effect runs only once on component mount
    console.log(allCharacters);



    // TODO: Add values to be included in the context here
    let contextValues = {
        allCharacters, 
        setAllCharacters
    }

    // TODO: Wrap the {children} in the PokemonContext.Provider and provide the values above
    return (
        <CharacterContext.Provider value={contextValues}>
         { children }
        </CharacterContext.Provider>
    )
}

export default CharacterProvider