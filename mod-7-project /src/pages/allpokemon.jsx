import { Link } from "react-router-dom";
import CharCollection from '../component/PokemonCollection'
import Search from "../component/filter";


const AllPokemon= () => {
    return (
        <>

        
        <Search/>
        <CharCollection/>
        </>

    );
  };
  
  export default AllPokemon