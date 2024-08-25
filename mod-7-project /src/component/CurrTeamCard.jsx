import { useState, useEffect } from "react"
import handleFetch from "../utils/fetch"
import Moves from "./Moves"
import capitalPokeName from "../utils/capitalPokeName"

const CurrTeamCard = (pokemon) => {
  const [pokemonData, setPokemonData] = useState('')
  const [error, setError] = useState()
  const [pokeMoves, setPokeMoves] = useState([])
  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(pokemon.url);
      if (data) setPokemonData(data);
      console.log(data)
      if (error) setError(error.message);
    };
    doFetch();
  }, [pokemon.url]);

  return (
    <article className="curr-team-card">
      {pokemonData ? (
      
      <>
        <img src={pokemonData?.sprites?.other?.showdown?.front_default} alt={pokemon.name} />
        <h3>{capitalPokeName(pokemonData.name)}</h3>
        <Moves pokeMoves={pokeMoves} setPokeMoves={setPokeMoves} moves={pokemonData.moves}/>
      
        </>
    ) : (
      <p>No data available</p>
    )}
    </article>
  )
}

export default CurrTeamCard