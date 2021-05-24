import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Loading from '../loading';
import Card from '../card';
import './PokemonDetails.css';
import { MyPokemonsContext } from "../MyPokemonsContext";

const PokemonDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [pokemonById, setPokemonById] = React.useState([]);
  const [pokemonByNumericOrder, setPokemonByNumericOrder] = React.useState([]);
  const [pokemonEvolution, setPokemonEvolution] = React.useState([]);
  const [allPokemonEvolution, setAllPokemonEvolution] = React.useState([]);
  const {
    myPokemons,
    setMyPokemons,
  } = React.useContext(MyPokemonsContext);

  React.useEffect(() => {
    const getPokemonById = async () => {
      try{
        const url = (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const res = await fetch(url);
        const currentPokemonData = await res.json();

        getPokemonSpecies(currentPokemonData);
        setPokemonById(currentPokemonData);
      } catch (err) {
        console.log(err);
      }
    }

    const getPokemonSpecies = async (data) => {
      try{
        const url = data.species.url;
        const res = await fetch(url);
        const speciesData = await res.json();
        setLoading(false);

        if(speciesData){
          getPokemonEvolution(speciesData);
        }
      } catch (err) {
        console.log(err);
      }
    }

    const getPokemonEvolution = async (data) => {
      try{
        let pokemonChain = [];
        const url = data.evolution_chain.url;
        const res = await fetch(url);
        const evolutionData = await res.json();
  
        let dataChain = evolutionData.chain;
  
        if(typeof dataChain.evolves_to[0] !== 'undefined'){
          do {
            pokemonChain.push({
              "name": dataChain.species.name,
            });
          
            dataChain = dataChain['evolves_to'][0];
          } while (dataChain !== undefined && dataChain.hasOwnProperty('evolves_to'));
        };
        getAllPokemonsEvolution(pokemonChain);
        setPokemonEvolution(pokemonChain);
      } catch (err) {
        console.log(err);
      }
    }

    const getAllPokemonsEvolution = async (data) => {
      try {
        let allPokemonEvolution = [];
        let allEvolution = await Promise.all(data.map(async pokemonEvolution => {
          const url = await (`https://pokeapi.co/api/v2/pokemon/${pokemonEvolution.name}`);
          const res = await fetch(url);
          const speciesData = await res.json();

          let all = await allPokemonEvolution.push(speciesData);
          return all;
        }))
        
        
        setAllPokemonEvolution(allPokemonEvolution);
      } catch (err) {
        console.log(err);
      }
      
    }
    getPokemonById();
  
  }, []);

  
  const pokemonEvolutionByOrder = async () => {
    const displayOrder = await allPokemonEvolution.sort(function(a, b){return a.id-b.id});
    setPokemonByNumericOrder(displayOrder);
  }
  pokemonEvolutionByOrder();

  const findPokemonInYourList = myPokemons.some(item => item.id === pokemonById.id);
  
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pokemonDetail">
      <Card pokemon={pokemonById}>
        <div className="catchBtn">
          <button class="catchButton" disabled={findPokemonInYourList} onClick={() => setMyPokemons(prevState => [
            ...prevState, pokemonById ])}>
              {
                findPokemonInYourList ? 'In Your List' : "Catch"
              }
          </button>
        </div>

        {
         pokemonEvolution.length !== 0 && 
          <div className="flexEvolution">
              {
                pokemonByNumericOrder.map (pokemonEvolutionData => {
                  return (
                    <a onClick={() => {window.location.href=`/pokemon/${pokemonEvolutionData.id}`}}>
                      <img src={pokemonEvolutionData.sprites.front_default} alt={pokemonEvolutionData.name} />
                      <span>{pokemonEvolutionData.name}</span>
                    </a>
                  )
                })
              }
          </div>
        }
      </Card>
    </div>
  );
};

export default PokemonDetails;