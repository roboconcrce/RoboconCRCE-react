import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Home,
  Contact,
  Navbar,
  Achievements,
  Gallery,
  Sponsors
} from './components';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/sponsors" component={Sponsors} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
