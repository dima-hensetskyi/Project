import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CategoriesPage from './components/categories/CategoriesPage';
import ChartsPage from './components/charts/ChartsPage';
import HomePage from './components/HomePage';
import Settings from './components/settings/Settings';
import TransactionsPage from './components/transactions/TransactionsPage';

import './App.css';

const App = () => (
  <Router>
    <div className="page">
      <Switch>
        <Route path="/home" component={HomePage} exact></Route>
        <Route path="/charts" component={ChartsPage} exact></Route>
        <Route path="/categories" component={CategoriesPage} exact></Route>
        <Route path="/tables" component={TransactionsPage} exact></Route>
        <Route path="/settings" component={Settings}></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </div>
  </Router>
);

export default App;
