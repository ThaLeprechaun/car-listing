import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Filter from './Pages/Filter/Filter';
import FirstFilter from './Pages/CarOwners/FilterList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Filter />
        </Route>
        <Route path="/1">
          <FirstFilter />
        </Route>
        <Route path="/2">
          <FirstFilter />
        </Route>
        <Route path="/3">
          <FirstFilter />
        </Route>
        <Route path="/4">
          <FirstFilter />
        </Route>
        <Route path="/5">
          <FirstFilter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
