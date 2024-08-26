import { useState } from "react"
import CurrTeamCard from "./CurrTeamCard"

const Teams = ({currPokemonTeam}) => {
  console.log(currPokemonTeam)
    return (
      <section id="team">
        <h1>Your Team!</h1>
        <section id="team-cards">
          {currPokemonTeam.map((pokemon) => (
            <CurrTeamCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
        </section>
        
      </section>
    )

}

export default Teams