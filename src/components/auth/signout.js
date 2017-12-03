import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../../redux/modules/authentication';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return <div>Sorry to see you go...</div>;
  }
}

mapDispatchToProps = {
  signout = actions.signoutUser,
}

export default connect(null, mapDispatchToProps)(Signout);
