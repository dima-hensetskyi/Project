import { Route, Switch } from 'react-router-dom';

import CategoriesPage from '../../components/categories/CategoriesPage';

import ChartsPage from '../../components/Charts/ChartsPage';

import HomePage from '../../components/HomePage';
import Settings from '../../components/settings/Settings';
import TransactionsPage from '../../components/transactions/TransactionsPage';

const Routers = () => (
  <Switch>
    <Route path="/home" component={HomePage} exact></Route>
    <Route path="/charts" component={ChartsPage} exact></Route>
    <Route path="/categories" component={CategoriesPage} exact></Route>
    <Route path="/tables" component={TransactionsPage} exact></Route>
    <Route path="/settings" component={Settings} exact></Route>
    <Route path="/" component={HomePage}></Route>
  </Switch>
);

export default Routers;
