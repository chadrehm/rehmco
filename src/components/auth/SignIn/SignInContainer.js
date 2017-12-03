import React from 'react';
import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { actions } from '../../../redux/modules/authentication';

import { SignIn } from './SignIn';

const handleFormSubmit = props => () => {
  console.log(props);
}

const renderAlert = ({ errorMessage }) => () => {
  if (errorMessage) {
    return (
      <div className="alert alert-danger">
        <strong>Oops!</strong> {errorMessage}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.error,
});

const mapDispatchToProps = {
  signin: actions.signinUser,
}

const enhance = compose(
  reduxForm({
    form: 'signin',
    fields: ['email','password']
  }, mapStateToProps, mapDispatchToProps),
  withHandlers({ handleFormSubmit, renderAlert }),
)

export const SignInContainer = enhance(SignIn);
