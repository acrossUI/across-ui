import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
  </Switch>
);

export default Routes;
