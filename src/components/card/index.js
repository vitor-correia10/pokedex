import React from "react";
import './Card.css';

const Card = ({pokemon}) => {
  console.log(pokemon);
    return (
      <div className={`card ${pokemon.types[0].type.name}`}>
        <div className="img">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="name">
            {pokemon.name}
        </div>
        <div className="types">
            {
              pokemon.types.map((type,i) => {
                return (
                  <div key={i} className="type">
                      {type.type.name}
                  </div>
                )
              })
            }
        </div>
        <div className="info">
            <div className="data">
                <p>Weight: <span>{pokemon.weight}</span></p>
            </div>
            <div className="data">
                <p>Height: <span>{pokemon.height}</span></p>
            </div>
            <div className="data">
                <p>Ability: </p>
                <ul>
                  {
                    pokemon.abilities.map(ability => {
                      return (
                        <li className="ability">
                            {ability.ability.name}
                        </li>
                      )
                    })
                  }
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Card