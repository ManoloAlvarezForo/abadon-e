import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Routes from '../routes/Routes';

const Root: React.FC = () => (
  <Router>
    <Routes />
  </Router>
);

export default hot(Root);
