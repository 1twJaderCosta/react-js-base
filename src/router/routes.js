import React from 'react';
import { Switch } from 'react-router-dom';

import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

import HomePage from '~/pages/Home';
import NotFoundPage from '~/pages/NotFound';

import PATHS from './paths';

const Content = () => (
  <Switch>
    <PublicRoute path={PATHS.HOME} component={HomePage} exact />

    <PrivateRoute path={PATHS.HOME} component={HomePage} exact />

    <PublicRoute component={NotFoundPage} />
  </Switch>
);

export default Content;
