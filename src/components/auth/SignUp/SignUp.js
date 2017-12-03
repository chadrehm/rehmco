import React from 'react';

export const SignUp = ({ handleSubmit, handleFormSubmit, fields: { email, password, passwordConfirm }, renderAlert }) =>
  <form onSubmit={handleSubmit(handleFormSubmit)}>
    <fieldset className="form-group">
      <label>Email:</label>
      <input className="form-control" {...email} />
      {email.touched && email.error &&  <div className="error">{email.error}</div>}
    </fieldset>
    <fieldset className="form-group">
      <label>Password:</label>
      <input type="password" className="form-control" {...password} />
      {password.touched && password.error && <div className="error">{password.error}</div>}
    </fieldset>
    <fieldset className="form-group">
      <label>Confirm Password:</label>
      <input type="password" className="form-control" {...passwordConfirm} />
      {passwordConfirm.touched && passwordConfirm.error &&  <div className="error">{passwordConfirm.error}</div>}
    </fieldset>
    {renderAlert}
    <button action="submit" className="btn btn-primary">Sign Up</button>
  </form>;
