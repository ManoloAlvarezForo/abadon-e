/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { AUTH_TOKEN } from '../constants/communication';
import IS_VALID_TOKEN from './AuthQueries';

// export type WrapperProps = {
//   mainApp: React.ElementType;
// };

interface PrivateRouteProps extends RouteProps {
  container: React.ElementType;
}

const AuthRoute = ({
  component: Component,
  container: Container,
  ...rest
}: PrivateRouteProps) => {
  const token = localStorage.getItem(AUTH_TOKEN);

  let isAuth = false;

  if (!token) {
    return <Redirect to="/login" />;
  }

  const { data, loading, error } = useQuery(IS_VALID_TOKEN, {
    variables: { token },
    skip: !token
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error to connecting server...</div>;
  }

  if (data && !loading) {
    isAuth = data.isValidToken.isValid;
  }

  const preValidation = (props: RouteProps) => {
    if (!Component || !Container) {
      return <Redirect to="/" />;
    }
    if (isAuth === true) {
      return <Container {...props} body={Component} />;
    }
    return <Redirect to="/login" />;
  };

  return <Route {...rest} render={preValidation} />;
};

export default AuthRoute;
