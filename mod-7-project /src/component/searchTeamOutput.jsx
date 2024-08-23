import CharCard from "./PokemonCard"
const SearchTeamOutput = ({ currPokemon }) => {
  console.log(currPokemon);
  
  if (currPokemon.length !== 1302) {
    return (
      <div className="cards">
        {currPokemon.map((pokemon) => (
            <CharCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))
        }
      </div>
    );
  }
};

export default SearchTeamOutput