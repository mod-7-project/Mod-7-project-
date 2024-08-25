import { useState, useEffect } from "react";
import handleFetch from "../utils/fetch";
import capitalPokeName from "../utils/capitalPokeName";

const SearchTeamCard = ({ name, url , currPokemonTeam, setCurrPokemonTeam}) => {
  const [pokemonData, setPokemonData] = useState('');
  const [error, setError] = useState();

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(url);
      if (data) setPokemonData(data);
      console.log(data)
      if (error) setError(error.message);
    };
    doFetch();
  }, [url]);

  useEffect(() => {
    console.log(currPokemonTeam)
  })

  return (
    <div className="search-team-char-card">


      {pokemonData ? (
      
        <>
          <img src={pokemonData?.sprites?.other?.showdown?.front_default} alt={name} />
          <h3>{capitalPokeName(pokemonData.name)}</h3>
          <button onClick={(e) => {
            e.preventDefault
            setCurrPokemonTeam((pokemonTeam) => [...pokemonTeam, {name, url}])
          }}>Add to Team!</button>
        
          </>
      ) : (
        <p>No data available</p>
      )}

    </div>
  );
};

export default SearchTeamCard