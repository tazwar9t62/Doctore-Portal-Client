import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Login from './components/Login/Login';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
   <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <Route path="/appointment">      
            <Appointment/>
          </Route>
          <Route path="/login">      
            <Login/>
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
   </UserContext.Provider>
  );
}

export default App;
