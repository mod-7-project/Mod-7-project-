import { useContext, useState } from 'react';
import CharCard from './PokemonCard';
import CharacterContext from '../context/context';

const CharCollection = () => {
    const allCharacters = useContext(CharacterContext).allCharacters;
    const [currentPage, setCurrentPage] = useState(0);
    const charactersPerPage = 24;

    const handleNext = () => {
        if (currentPage < Math.floor(allCharacters.length / charactersPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * charactersPerPage;
    const displayedCharacters = allCharacters?.slice(startIndex, startIndex + charactersPerPage);

    return (
        <div>
            <div className="cards">
                {displayedCharacters?.map((character, index) => (
                    <CharCard key={index} name={character.name} url={character.url} />
                ))}
            </div>
            <div className="moving-buttons">
                <button className='prev-button' onClick={handlePrev} disabled={currentPage === 0} aria-label='Go to Previous set of Pokemon'>
                    Prev
                </button>
                <button className='next-button'onClick={handleNext} disabled={startIndex + charactersPerPage >= allCharacters.length} aria-label='Go to Next set of Pokemon'>
                    Next
                </button>
            </div>
        </div>
    );
};

export default CharCollection;
