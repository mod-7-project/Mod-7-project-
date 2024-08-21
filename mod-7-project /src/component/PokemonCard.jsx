import { useState, useEffect } from 'react';
import handleFetch from '../utils/fetch';

const CharCard = ({name, url}) => {
  const [pokemonData, setPokemonData] = useState('');
  const [error, setError] = useState();
    // TODO: use useEffect to fetch data from the local JSON server (remember to start JSON server!)
    useEffect(() => {
      // Function to handle the fetching of GIFs
      const doFetch = async () => {
          // Calling the handleFetch function to get data from the Giphy API
          const [data, error] = await handleFetch(url);
          // console.log(data)
          // If data is successfully fetched, update the data state
          if (data) setPokemonData(data);
          // console.log(data)
          // If an error occurs, update the error state
          if (error) setError(error.message);
          // console.log(data)

      }
      doFetch(); // Trigger the fetch operation
  }, [url]); 
  console.log(pokemonData)

  return (
    <div className="char-card">
      {pokemonData ? (
        <>
          <img src={pokemonData.sprites.front_default} alt={name} />
          <h3>{pokemonData.name}</h3>
        </>
      ) : (
        <p>No data available</p> // Handle case when data is not available
      )}
    </div>
  );


}

export default CharCard