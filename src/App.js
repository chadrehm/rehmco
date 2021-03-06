import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import RequireAuth from './components/auth/require_auth';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Home } from './components/Home';
import { SignInContainer } from './components/auth/SignIn/SignInContainer';
import { SignUpContainer } from './components/auth/SignUp/SignUpContainer';
import { SignOutContainer } from './components/auth/SignOutContainer';
import { MapContainer } from './components/Map/MapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignInContainer} />
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/signout" component={SignOutContainer} />
          <Route path="/map" component={RequireAuth(MapContainer)} />
        </div>
      </div>
    );
  }
}

export default App;
