import React, { useState } from 'react';
import SignupForm from '../components/auth/singnUp';
import LoginForm from '../components/auth/signin';
import ForgotPassword from '../components/auth/fogotpassword';

type AuthMode = 'login' | 'signup' | 'forgotpassword';

const AuthPage: React.FC = () => {
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [signupSuccess, setSignupSuccess] = useState<boolean>(false);



  const handleSignupSuccess = () => {
    setSignupSuccess(true);
    setAuthMode('login');
  };

  const handleForgotPasswordSuccess = () => {
    setAuthMode('login');
  };

  const hadleonLogintoSingUp = () => {
    setAuthMode('signup');
  };
  
  const hadlonSignupBack = () => {
    setAuthMode('login');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {authMode === 'login' && (
        <div>
 
          <LoginForm onLogintoSingUp={hadleonLogintoSingUp} />

        </div>
      )}

      {authMode === 'signup' && (
        <div>
          <SignupForm onSignupSuccess={handleSignupSuccess} onSignupBack={hadlonSignupBack} />

        </div>
      )}

      {authMode === 'forgotpassword' && (
        <div>
          <ForgotPassword onForgotPasswordSuccess={handleForgotPasswordSuccess} />

        </div>
      )}
    </div>
  );
};

export default AuthPage;
