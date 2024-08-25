import SearchTeamCard from "./SearchTeamCard";
const SearchTeamOutput = ({ currPokemon , currPokemonTeam, setCurrPokemonTeam}) => {
  console.log(currPokemonTeam);
  
  if (currPokemon.length < 1302) {
    return (
      <div className="cards">
        {currPokemon.map((pokemon) => (
            <SearchTeamCard key={pokemon.name} 
                            name={pokemon.name} 
                            url={pokemon.url} 
                            currPokemonTeam={currPokemonTeam} 
                            setCurrPokemonTeam={setCurrPokemonTeam}
            />
          ))
        }
      </div>
    );
  }
};

export default SearchTeamOutput