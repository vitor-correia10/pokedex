import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { CurrentPokemonProvider } from "./components/CurrentPokemonContext";
import { MyPokemonsProvider } from "./components/MyPokemonsContext";

ReactDOM.render(
  <CurrentPokemonProvider>
    <MyPokemonsProvider>
      <App />
    </MyPokemonsProvider>
  </CurrentPokemonProvider>,
  document.getElementById('root')
);