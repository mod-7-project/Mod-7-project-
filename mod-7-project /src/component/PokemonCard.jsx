import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import handleFetch from '../utils/fetch';

const CharCard = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState('');
  const [error, setError] = useState();

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(url);
      if (data) setPokemonData(data);
      if (error) setError(error.message);
    };
    doFetch();
  }, [url]);

  

  return (
    <div className="char-card">
      {pokemonData ? (
        <>
          <img 
            src={pokemonData?.sprites?.other?.showdown?.front_default} 
            alt={name} 
          />
          <h3>{pokemonData.name}</h3>
          <Link to={`/more-info/${pokemonData.id}`}>More Info</Link> {/* Link with Pokémon ID */}
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );

}

export default CharCard;

