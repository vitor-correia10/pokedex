import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { CurrentPokemonProvider } from "./components/CurrentPokemonContext";

ReactDOM.render(
  <CurrentPokemonProvider>
    <App />
  </CurrentPokemonProvider>,
  document.getElementById('root')
);