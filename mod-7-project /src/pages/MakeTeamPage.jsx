import Form from "../component/makeTeamForm";
import SearchTeamOutput from "../component/searchTeamOutput";
import Teams from "../component/Teams";
import CharacterContext from "../context/context";
import { useState, useContext} from "react";



const TeamPage = () => {
  const [searchInput, setSearchInput] = useState("")
  const [currPokemon, setCurrPokemon] = useState([])
  const currPokemonTeam = useContext(CharacterContext).currPokemonTeam
  const setCurrPokemonTeam = useContext(CharacterContext).setCurrPokemonTeam
  return (
    <main id="team-page">
      <Form searchInput={searchInput} setSearchInput={setSearchInput} currPokemon={currPokemon} setCurrPokemon={setCurrPokemon}/>
      <SearchTeamOutput currPokemon={currPokemon} currPokemonTeam={currPokemonTeam} setCurrPokemonTeam={setCurrPokemonTeam}/>
      <Teams currPokemonTeam={currPokemonTeam} setCurrPokemonTeam={setCurrPokemonTeam}/>
    </main>
    
  )
}

export default TeamPage