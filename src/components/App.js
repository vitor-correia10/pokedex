import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

//Components
import Navbar from './navbar';
import FetchPokemons from './fetchPokemons';
import FourOhFour from './fourOhFour';

function App() {
  
  return (
    <Router>
      <Navbar/>
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
