import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

//Components
import Navbar from "./navbar";
import Homepage from "./homepage";
import PokemonDetails from './pokemonDetails';
import FourOhFour from "./fourOhFour";
import Loading from "./loading";
import MyCatchedPokemons from "./myPokemons";

import { CurrentPokemonContext } from "./CurrentPokemonContext";

function App() {
  const {
    loading
  } = React.useContext(CurrentPokemonContext);

  return (
    <Router>
      <Navbar/>
      {loading ? <Loading /> : 
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/pokemon/:id">
          <PokemonDetails />
        </Route>
        <Route path="/myPokemons">
          <MyCatchedPokemons />
        </Route>
        <Route path="*">
          <FourOhFour />
        </Route>
      </Switch>
      }
    </Router>
  );
}

export default App;
