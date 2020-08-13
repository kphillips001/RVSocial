import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import './App.css';

const App = () => (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </>
    </Router>
)

export default App;
