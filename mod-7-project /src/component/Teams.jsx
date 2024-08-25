import { useState } from "react"
import CurrTeamCard from "./CurrTeamCard"

const Teams = ({currPokemonTeam}) => {
  console.log(currPokemonTeam)
    return (
      <div className="cards">
        {currPokemonTeam.map((pokemon) => (
          <CurrTeamCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    )

}

export default Teams