import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { HeaderContainer } from './components/Header/HeaderContainer';
import { SignInContainer } from './components/auth/SignIn/SignInContainer';
import { SignUpContainer } from './components/auth/SignUp/SignUpContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <div className="container">
          <Route path="/signin" component={SignInContainer} />
          <Route path="/signup" component={SignUpContainer} />
        </div>
      </div>
    );
  }
}

export default App;
