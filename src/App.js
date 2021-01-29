import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Categories from "./components/categories/Categories";
import Charts from "./components/charts/Charts";
import TransactionsPage from "./components/transactions/TransactionsPage";

import "./App.css";

const App = () => (
  <Router>
    <div className="app">
      <div className="page">
        <Switch>
          <Route path="/charts" component={Charts}></Route>
          <Route path="/categories" component={Categories}></Route>
          <Route path="/" component={TransactionsPage}></Route>
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
