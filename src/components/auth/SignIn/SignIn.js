import React from 'react';

export const SignIn = ({ handleSubmit, handleFormSubmit, fields: { email, password }, renderAlert }) =>
  <form onSubmit={handleSubmit(handleFormSubmit)}>
    <fieldset className="form-group">
      <label>Email:</label>
      <input {...email} className="form-control" />
    </fieldset>
    <fieldset className="form-group">
      <label>Password:</label>
      <input {...password} type="password" className="form-control" />
    </fieldset>
    {renderAlert}
    <button action="submit" className="btn btn-primary">Sign In</button>
  </form>;
