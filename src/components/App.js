import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

//Pages
import FetchPokemons from './fetchPokemons';
import FourOhFour from './fourOhFour';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FetchPokemons/>
        </Route>
        <Route path="*">
          <FourOhFour />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
