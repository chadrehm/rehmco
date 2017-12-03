import React from 'react';
import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { actions } from '../../../redux/modules/authentication';

import { SignIn } from './SignIn';

const handleFormSubmit = ({ signin, fields: { email, password } }) => () => {
  console.log(email.value)
  signin(email.value, password.value);
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
  errorMessage: state,
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
