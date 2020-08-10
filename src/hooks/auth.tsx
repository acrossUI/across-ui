import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import { notification } from 'antd';
import app from '../config/firebase';

interface SignInCredentialsProps {
  email: string;
  password: string;
}

interface AuthContextProps {
  currentUser: any;
  signIn(credentials: SignInCredentialsProps): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

// prettier-ignore
export const AuthProvider = ({children}: { children: JSX.Element}) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() =>{
    app.auth().onAuthStateChanged(setCurrentUser)
  },[])

  // signin
  const signIn = useCallback(async ({ email, password }): Promise<void> => {

    try {
      await app
      .auth()
      .signInWithEmailAndPassword(email, password)
    } catch (err) {
        notification.open({
          message: err.code,
          description: err.message,
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
    } // endCatch
  },[])


  // signout
  const signOut = useCallback(async () => {
    try {
      await app
      .auth().signOut().then(() => {
       console.log('signed out sucessfully')
      })
    } catch (error) {
      alert(error);
    }




  },[])


  return (
    <AuthContext.Provider value={{ currentUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
};

// just create a aliase from useContext to useAuth and apply one validation
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
