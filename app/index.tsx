import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
// Graphql
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/link-context';
// import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
// import MomentUtils from '@date-io/moment';
// import { MuiPickersUtilsProvider } from 'material-ui-pickers';

import { AUTH_TOKEN, GRAPHQL_URL } from './constants/communication';

// import introspectionQueryResultData from './fragmentTypes.json';
import App from './containers/Root';
import './app.global.css';
// import { configureStore, history } from './store/configureStore';

// const fragmentMatcher = new IntrospectionFragmentMatcher({
//   // introspectionQueryResultData
// });

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

const httpLink = new HttpLink({
  uri: GRAPHQL_URL
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(AUTH_TOKEN);

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token || ''
    }
  };
});

// const cache = new InMemoryCache({ introspectionQueryResultData });

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

render(
  <AppContainer>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppContainer>,
  document.getElementById('root')
);
