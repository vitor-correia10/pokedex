import React from "react";
import { useParams } from "react-router-dom";
import Loading from '../loading';
import Card from '../card';
import './PokemonDetails.css';

const PokemonDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [pokemonById, setPokemonById] = React.useState([]);

  React.useEffect(() => {
    const getPokemonById = async () => {
      try{
        const url = (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const res = await fetch(url);
        const data = await res.json();
        console.log('here', data)

      setPokemonById(data);
      setLoading(false);

    } catch (err) {
      console.log(err);
    }
  }
  getPokemonById();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pokemonDetail">
      <Card pokemon={pokemonById}>
      </Card>
    </div>
  );
};

export default PokemonDetails;