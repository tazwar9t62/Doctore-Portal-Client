import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Appointment from './pages/Appointment';

function App() {
  return (
    <Router>
        <Switch>
        <Route path="/appointment">      
            <Appointment/>
          </Route>
        <Route path="/home">      
            <Home/>
          </Route>
          <Route exact path="/">
          
            <Home />
          </Route>
          <Route path="*">
            <h1>error 404</h1>
            {/* <NoMatch /> */}
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
