import CharCollection from '../component/PokemonCollection'
import  CharCard  from '../component/PokemonCard'
import TeamPage from './MakeTeamPage'
import Search from '../component/filter'


const HomePage = () => {
  return (
    <div>   
      <Search/>
       <CharCollection/>
       {/* <CharCard/> */}
       </div>
   

  )

}

export default HomePage