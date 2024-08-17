import React from 'react';

const SignInForm = ({ toRegister }) => {
  return (
    <div className="card">
      <form className="form">
        <p className="title">Sign In</p>
        <p className="message">Signin now to access the app.</p>
        <label>
          <input className="input" type="email" placeholder="" required />
          <span>Email</span>
        </label>
        <label>
          <input className="input" type="password" placeholder="" required />
          <span>Password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Don't have an account? <button type="button" className="butt" onClick={toRegister}>Sign up</button>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
