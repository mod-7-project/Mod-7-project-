import { Link } from "react-router-dom";
import CharCollection from '../component/PokemonCollection'
import Search from "../component/filter";


const AllPokemon= () => {
    return (
        <main id="all-pokemon-page">

        <h1>Search 'em  all!</h1>
        <Search/>
        <CharCollection/>
        </main>

    );
  };
  
  export default AllPokemon