import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { SignInContainer } from './components/auth/SignIn/SignInContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Route path="/signIn" component={SignInContainer} />
      </div>
    );
  }
}

export default App;
