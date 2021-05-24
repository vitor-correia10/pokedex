import React from "react";

export const CurrentPokemonContext = React.createContext();

export const CurrentPokemonProvider = ({ children }) => {
    let offset = 0;
    let loadNumber = 20;
    const [loading, setLoading] = React.useState(true);
    const [pokemons, setPokemons] = React.useState([]);
    const [previousPage, setPreviousPage] = React.useState("");
    const [nextPage, setNextPage] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${loadNumber}`);
  
  React.useEffect(() => {
    const getPokemon = async () => {
      try{
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
      } catch (err) {
        console.log(err);
      }
    }
    getPokemon();
  }, [currentPage]);

  const loadingPokemon = async (data) => {
    let pokemonDetails = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getAllPokemonDetails(pokemon.url);
      return pokemonRecord;
    }))

    setPokemons(pokemonDetails);
  }

  const getAllPokemonDetails = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      return data;

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <CurrentPokemonContext.Provider
      value={{
        pokemons,
        loading,
        setCurrentPage,
        nextPage,
        previousPage,
      }}>
      {children}
    </CurrentPokemonContext.Provider>
  );
};