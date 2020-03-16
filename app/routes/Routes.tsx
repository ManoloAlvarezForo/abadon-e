/* eslint-disable no-console */
import React from 'react';
import { Switch, Route } from 'react-router';
import AuthRoute from './AuthRoute';

// Components.
import AuthenticationPage from '../containers/Auth/AuthenticationPage';

// Containers.
import HomeContainer from '../containers/HomePage/HomePage';

// Wrapper
// import PageWrapper from '../containers/Drawer/DrawerMainWrapper';
// import PageWrapper from '../containers/Main/Main';

const Routes: React.FC = () => {
  console.log('in routes');
  return (
    <Switch>
      <Route path="/login" component={AuthenticationPage} />
      <AuthRoute path="/" component={HomeContainer} container={HomeContainer} />
    </Switch>
  );
};

export default Routes;
