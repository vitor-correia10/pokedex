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
import FourOhFour from "./fourOhFour";

function App() {
  
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        {/* <Route path="/pokemon/:id">
            <Product />
        </Route>
        <Route path="/mypokemons">
            <Product />
        </Route> */}
        <Route path="*">
          <FourOhFour />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
