import React from "react";
import Loading from "../loading";
import './Homepage.css';
import Card from '../card';

const Homepage = () => {
    let offset = 0;
    let loadNumber = 20;
    const [loading, setLoading] = React.useState(true);
    const [pokemons, setPokemons] = React.useState([]);
    const [previousPage, setPreviousPage] = React.useState("");
    const [nextPage, setNextPage] = React.useState("");
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

    } catch (error) {
      console.log("error", error);
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
    <section>
      <div className="btn">
        <button onClick={goToPreviousPage} disabled={previousPage === null}>Previous </button>
        <button onClick={goToNextPage} disabled={nextPage === null}>Next </button>
      </div>
      <div className="container">
        {
          pokemons.map(pokemon => {
            return <Card key={pokemon.id} pokemon={pokemon} />
          })
        }
      </div>
      <div className="btn">
        <button onClick={goToPreviousPage} disabled={previousPage === null}>Previous </button>
        <button onClick={goToNextPage} disabled={nextPage === null}>Next </button>
      </div>
    </section>
  )
}

export default Homepage;