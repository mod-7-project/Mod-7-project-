import { useContext } from 'react';
import CharCard from './PokemonCard'
import CharacterContext from '../context/context';

// TODO: import the PokemonContext and useContext

const CharCollection = () => {

    // TODO: Replace this to get the pokemon from PokemonContext
    
    const allCharacters = useContext(CharacterContext).allCharacters;
    // console.log(allCharacters)

    return (
        <div className="cards">
            {allCharacters?.slice(0, 24).map((character, index) => (
                <CharCard key={index} name={character.name} url={character.url} 
                />
            ))}
        </div>
    );
}

export default CharCollection