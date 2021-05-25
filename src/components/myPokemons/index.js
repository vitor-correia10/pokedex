import React from "react";
import { MyPokemonsContext } from "../MyPokemonsContext";
import Card from '../card';
import { Link } from "react-router-dom";
import "./MyPokemons.css";

const MyCatchedPokemons = () => {
  const {
    myPokemons,
    setMyPokemons,
  } = React.useContext(MyPokemonsContext);

  return (
    <div className="myPokemonsGrid">
      {myPokemons.length === 0 ? <p className="withoutPokemon">You don't have any pokemon yet!</p> : 
        <>
          {
            myPokemons.map( myPokemon => {
              return (
                <Link to={`/pokemon/${myPokemon.id}`} class="myPokemonLink">
                  <Card key={myPokemon.id} pokemon={myPokemon} />
                </Link>
              )
            })
          }
        </>
      }
    </div>
  )
}

export default MyCatchedPokemons;