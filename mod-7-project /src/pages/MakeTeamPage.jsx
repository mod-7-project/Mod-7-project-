import Form from "../component/makeTeamForm";
import SearchTeamOutput from "../component/searchTeamOutput";
import { useState } from "react";



const TeamPage = () => {
  const [searchInput, setSearchInput] = useState("")
  const [currPokemon, setCurrPokemon] = useState([])
  return (
    <>
      <Form searchInput={searchInput} setSearchInput={setSearchInput} currPokemon={currPokemon} setCurrPokemon={setCurrPokemon}/>
      <SearchTeamOutput currPokemon={currPokemon}/>
    </>
    
  )
}

export default TeamPage