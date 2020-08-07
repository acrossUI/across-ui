import React, { useEffect } from 'react';
import app from '../../../config/firebase';
import { useAuth } from '../../../hooks/auth';
// import { Container } from './styles';

const SignIn: React.FC = () => {
  const { currentUser, signIn } = useAuth();

  useEffect(() => {
    signIn({ email: 'rodgomesc@gmail.com', password: '6267764726' });
  }, []);

  console.log(`----> ${JSON.stringify(currentUser)}`);
  return (
    <div>
      <h1>Signin</h1>
    </div>
  );
};

export default SignIn;
