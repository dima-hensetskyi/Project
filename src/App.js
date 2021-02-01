import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router } from 'react-router-dom';
import Routers from './common/Route/';

import './App.css';

const App = () => (
  <Router>
    <div className="page">
      <Routers />
    </div>
  </Router>
);

export default App;
