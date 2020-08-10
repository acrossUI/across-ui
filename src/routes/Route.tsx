import React, { useEffect } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { setTimeout } from 'timers';
import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { currentUser } = useAuth();
  /*
  setTimeout(() => {
    currentUser.updateProfile({
      displayName: 'João Carlos',
      photoURL:
        'https://avatars3.githubusercontent.com/u/3996742?s=460&u=9361410846b3771effb5b719a2abe5cfec43200f&v=4',
    });
  }, 3000);
*/
  useEffect(() => {
    return () => {
      console.log('rendered!!!!!');
    };
  }, []);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!currentUser ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/projects' }} />
        );
      }}
    />
  );
};

export default Route;
