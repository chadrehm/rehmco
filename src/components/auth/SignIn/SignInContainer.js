import React from 'react';
import { reduxForm } from 'redux-form';
import { push } from 'connected-react-router';
import { compose, withHandlers } from 'recompose';

import { actions } from '../../../redux/modules/authentication';

import { SignIn } from './SignIn';

const handleFormSubmit = ({ signin, fields: { email, password }, push }) => () =>
  signin(email.value, password.value, push);

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
  errorMessage: state.auth.errors,
});

const mapDispatchToProps = {
  push,
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
