
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import handleFetch from '../utils/fetch';

// const PokemonDetails = () => {
//     const { id } = useParams()
//     const [pokemon, setPokemon] = useState()


//     useEffect(() => {
//       // Function to handle the fetching of GIFs
//       const doFetch = async () => {
//         // Calling the handleFetch function to get data from the Giphy API
//         const [data, error] = await handleFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         console.log(data)
//         // If data is successfully fetched, update the data state
//         if (data) setAllCharacters(data.results);
//         console.log(data)
//         // If an error occurs, update the error state
//         if (error) setError(error.message);
//         // console.log(data)

//     }
//     doFetch(); // Trigger the fetch operation
// }, [id]);
    

//     return (
//         <main>
//           <h1>{pokemon.name}</h1>
//           <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//           <p>Base Experience: {pokemon.base_experience}</p>
//         </main>
//       );
// }
    
//     export default PokemonDetails;