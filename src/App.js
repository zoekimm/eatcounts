import React, {useState, useEffect} from "react"; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage'
import RecipePage from './components/pages/RecipePage';
import UserPage from './components/pages/UserPage';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={HomePage} />
        <Route exact path ='/AboutPage' component={AboutPage} />
        <Route exact path ='/UserPage' component={UserPage} />
        <Route exact path='/RecipePage' component={RecipePage} />
      </Switch>
    </Router>
  );
};

export default App;
