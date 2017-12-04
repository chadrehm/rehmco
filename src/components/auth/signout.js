import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../../redux/modules/authentication';

class SignOut extends Component {
  componentWillMount() {
    this.props.signout();
  }

  render() {
    return <div>Sorry to see you go...</div>;
  }
}

const mapDispatchToProps = {
  signout: actions.signoutUser,
}

export const SignOutContainer = connect(null, mapDispatchToProps)(SignOut);
