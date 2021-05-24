import React from 'react';
import Loading from '../loading';

const FetchPokemons = () => {
    let offset = 0;
    let loadNumber = 20;
    const [loading, setLoading] = React.useState(true);
    const [pokemons, setPokemons] = React.useState([]);
    const [previousPage, setPreviousPage] = React.useState('');
    const [nextPage, setNextPage] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${loadNumber}`);
  
  React.useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);

      const url = currentPage;
      const res = await fetch(url);
      const data = await res.json();
      if (data){
        setPokemons(data.results);
        setPreviousPage(data.previous);
        setNextPage(data.next);
        await loadingPokemon(data.results);
        setLoading(false);
      }
    }
    getPokemon();
  }, [currentPage]);

  const loadingPokemon = async (data) => {
    let _pokemonDetails = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getAllPokemonDetails(pokemon.url);
      return pokemonRecord;
    }))

    setPokemons(_pokemonDetails);
  }

  const getAllPokemonDetails = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      return data;

    } catch (error) {
      console.log('error', error);
    }
  }

  if (loading) {
      return <Loading />;
  }

  const goToPreviousPage = () => {
    setCurrentPage(previousPage)
  }

  const goToNextPage = () => {
    setCurrentPage(nextPage)
  }
  return (
    <div>
        {
          pokemons.map(pokemon => (
            <div key={pokemon.order}>{pokemon.name}
            {
            pokemon.types.map(type => (
              <p>{type.type.name}</p>
            ))
            } 
            </div>
          ))  
        }
        <button onClick={goToPreviousPage} disabled={previousPage === null}>Previous </button>
        <button onClick={goToNextPage} disabled={nextPage === null}>Next </button>
    </div>
  )
}

export default FetchPokemons;