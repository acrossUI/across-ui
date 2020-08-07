import React, { useEffect } from 'react';
import app from '../../../config/firebase';
import { useAuth } from '../../../hooks/authContext';
// import { Container } from './styles';

const SignIn: React.FC = () => {
  const { currentUser, signIn } = useAuth();

  useEffect(() => {
    signIn({ email: 'jujuba@gmail.com', password: '1234565' });
  }, []);

  console.log(`----> ${JSON.stringify(currentUser)}`);
  return <div />;
};

export default SignIn;
