import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalContextProvider from './context/GlobalContextProvider';

import Navbar from './components/Navbar';
import Home from './views/Home';
import User from './views/User';
import About from './views/About';
import NotFound from './views/NotFound';

import './styles/App.css';

const App = () => {
  return (
    <GlobalContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GlobalContextProvider>
  );
};

export default App;
