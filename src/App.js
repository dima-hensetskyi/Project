import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Categories from './components/Categories/Categories';
import ChartsPage from './components/Charts/ChartsPage';
import TransactionsPage from './components/transactions/TransactionsPage';
import HomePage from './components/HomePage';

import './App.css';

const App = () => (
  <Router>
    <div className="page">
      <Switch>
        <Route path="/home" component={HomePage} exact></Route>
        <Route path="/charts" component={ChartsPage} exact></Route>
        <Route path="/categories" component={Categories} exact></Route>
        <Route path="/tables" component={TransactionsPage} exact></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </div>
  </Router>
);

export default App;
