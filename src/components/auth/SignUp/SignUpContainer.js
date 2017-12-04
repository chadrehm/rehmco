import React from 'react';
import { reduxForm } from 'redux-form';
import { push } from 'connected-react-router';
import { compose, withHandlers } from 'recompose';

import { actions } from '../../../redux/modules/authentication';

import { SignUp } from './SignUp';

const handleFormSubmit = ({ signup, fields: { email, password }, push }) => () =>
  signup(email.value, password.value, push);

const renderAlert = ({ errorMessage }) => () => {
  if (errorMessage) {
    return (
      <div className="alert alert-danger">
        <strong>Oops!</strong> {errorMessage}
      </div>
    );
  }
}

const validate = formProps => {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.email) {
    errors.passwordConfirm = 'Please enter an password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm){
    errors.password = 'Passwords must match';
  }

  return errors;
}

const mapStateToProps = state => ({
  errorMessage: state,
});

const mapDispatchToProps = {
  push,
  signup: actions.signupUser,
}

const enhance = compose(
  reduxForm({
    form: 'signin',
    fields: ['email','password', 'passwordConfirm'],
    validate,
  }, mapStateToProps, mapDispatchToProps),
  withHandlers({ handleFormSubmit, renderAlert }),
)

export const SignUpContainer = enhance(SignUp);
