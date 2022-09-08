import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import './App.css';
import Users from './users/pages/Users';
import Places from './places/pages/Places';

function App() {
  return <Router>
    <Switch>
    
    <Route path = "/" exact>
    <Users/>

    <Route path = "/places/new" exact/>
    <Places/> 

    </Route>
    <Redirect to = "/"/>  
    </Switch> 
  </Router> 
}

export default App;
