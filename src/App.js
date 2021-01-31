import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Categories from './components/Categories/Categories';
import ChartsPage from './components/Charts/ChartsPage';
import TransactionsPage from './components/transactions/TransactionsPage';

import './App.css';

const App = () => (
  <Router>
    <div className="page">
      <Switch>
        <Route path="/charts" component={ChartsPage} exact></Route>
        <Route path="/categories" component={Categories} exact></Route>
        <Route path="/" component={TransactionsPage}></Route>
      </Switch>
    </div>
  </Router>
);

export default App;
