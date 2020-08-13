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
