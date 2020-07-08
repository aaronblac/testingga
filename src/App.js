import React from 'react';
import {useState, useEffect } from 'react';
import './App.css';
import ReactGa from 'react-ga';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import One from './One';
import Two from './Two';
function App() {
  useEffect(() => {
    ReactGa.initialize('UA-171905378-1')

    //to report pageview
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <div className="App">
      <header className="App-header">

      <Router>

      <a href="/One">One</a>
      <a href="/Two">Two</a>
        <Switch>
          <Route path="/one"><One />   </Route>
          <Route path="/two"><Two />   </Route>
        </Switch>
      </Router>

      </header>
    </div>
  );
}

export default App;
