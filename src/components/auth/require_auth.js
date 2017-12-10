import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

export default function(ComposedComponent) {
  class Authentication extends Component {vg

    componentWillMount() {
      if(!this.props.authenticated){
        this.props.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated){
        this.props.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.auth.authenticated,
  });

  const mapDispatchToProps = {
    push,
  }

  return connect(mapStateToProps, mapDispatchToProps)(Authentication)
}
