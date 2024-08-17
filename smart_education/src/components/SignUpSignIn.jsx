import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const SignUpSignIn = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toSignIn = () => setIsSignUp(false);
  const toRegister = () => setIsSignUp(true);

  return (
    <div className="con">
      {isSignUp ? <SignUpForm toSignIn={toSignIn} /> : <SignInForm toRegister={toRegister} />}
    </div>
  );
};

export default SignUpSignIn;
