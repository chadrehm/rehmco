import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      );
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <div className="App-header">
        <div className="container">
          <nav className="navbar navbar-light">
            <Link to="/" className="navbar-brand">RehmCo</Link>
            <ul className="nav navbar-nav pull-right">
                {this.renderLinks()}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated,
});

export const HeaderContainer = connect(mapStateToProps)(Header);
