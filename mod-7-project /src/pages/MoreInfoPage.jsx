import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link for navigation
import handleFetch from '../utils/fetch';

const MoreInfo = () => {
  const { id } = useParams(); // Get the Pokémon ID from the URL
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState();
  const [isShiny, setIsShiny] = useState(false); // State to manage shiny version

  useEffect(() => {
    const fetchData = async () => {
      const [data, error] = await handleFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (data) setPokemonData(data);
      if (error) setError(error.message);
    };
    fetchData();
  }, [id]);

  if (!pokemonData) return <p>Loading Pokémon data...</p>;

  // Toggle between normal and shiny images
  const handleImageClick = () => {
    setIsShiny(prevState => !prevState);
  };

  return (
    <div className="more-info-container">
      <div className="image-section">
        <img 
          src={isShiny ? pokemonData?.sprites?.front_shiny : pokemonData?.sprites?.front_default} 
          alt={pokemonData.name} 
          onClick={handleImageClick} // Handle image click to toggle shiny
        />
      </div>
      <div className="info-section">
        <h1>{pokemonData.name}</h1>
        <p><strong>Type:</strong> {pokemonData.types.map(type => type.type.name).join(', ')}</p>
        <p><strong>Moves:</strong> {pokemonData.moves.map(move => move.move.name).slice(0, 10).join(', ')}</p>
        <Link to="/" className="back-home-button">
          <button>Get Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default MoreInfo;



