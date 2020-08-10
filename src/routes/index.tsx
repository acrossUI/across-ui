import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import { SignIn, SignUp } from '../pages/Auth';
import Projects from '../pages/Projects';
import App from '../pages/Editor';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/projects" component={Projects} isPrivate />
    <Route path="/app" component={App} isPrivate />
  </Switch>
);

export default Routes;
