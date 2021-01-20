import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import CurrentBalance from "./components/CurrentBalance/CurrentBalance";
import Charts from "./components/Charts/Charts";
import Categories from "./components/Categories/Categories";
import TransactionsPage from "./components/transactions/TransactionsPage";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="navigation-wrapper">
          <CurrentBalance />
          <div className="link-list">
            <NavLink
              to="/home"
              className="app-link"
              activeClassName="active-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/charts"
              className="app-link"
              activeClassName="active-link"
            >
              Charts
            </NavLink>
            <NavLink
              to="/categories"
              className="app-link"
              activeClassName="active-link"
            >
              Categories
            </NavLink>
          </div>
        </div>
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
}
export default App;
