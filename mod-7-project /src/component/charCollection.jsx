import { useContext } from 'react';
import CharCard from './charCard'
import CharacterContext from '../context/context';

// TODO: import the PokemonContext and useContext

const CharCollection = () => {

    // TODO: Replace this to get the pokemon from PokemonContext
    
    const allCharacters = useContext(CharacterContext).allCharacters;
    console.log(allCharacters)

    return (
        <div className="cards">
            {allCharacters?.map(character => <CharCard key={character.index} name={character.name} 
            image={character.sprites.front_default}
                    />)}
        </div>
    )
}

export default CharCollection