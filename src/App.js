import React, {useState, useEffect} from "react"; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import RecipePage from './components/pages/RecipePage';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  /* For edamam API */

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path ='/' component={HomePage} />
        <Route exact path='/recipepage' component={RecipePage} />
      </Switch>
    </Router>
  );
};

export default App;
