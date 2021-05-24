import React from "react";
import './Homepage.css';
import Card from '../card';

import { CurrentPokemonContext } from "../CurrentPokemonContext";

const Homepage = () => {
  const {
    pokemons,
    setCurrentPage,
    previousPage,
    nextPage,
  } = React.useContext(CurrentPokemonContext);

  
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