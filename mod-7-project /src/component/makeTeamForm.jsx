import { useState } from "react"
import { useEffect } from "react"
import handleFetch from "../utils/fetch"



const Form = () => {
  const [searchInput, setSearchInput] = useState("")
  const [currPokemon, setCurrPokemon] = useState([])
  
  useEffect(() => {
    const doFetch = async() => {
      const [data, error] = await handleFetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302`)
        if (data) {
          setCurrPokemon(data.results.filter(({name})=> name.includes(searchInput)))
          // console.log(searchInput)
          // console.log(currPokemon)
        }  
        }
        doFetch()
  }, [searchInput])
  // useEffect(() => {
  //   console.log(searchInput)
  //   console.log(currPokemon)
  // }, [currPokemon])

  return (
    <div>
      <h3>Build Your Team</h3>
      <form id="build your team">
        <label>Name</label>
        <input type="text" placeholder="Name" value={searchInput} onChange={(e) => {
          setSearchInput(e.target.value)
        }}/>
      </form>
    </div>
  )
}