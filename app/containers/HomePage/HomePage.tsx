import React from 'react';
import Button from '@material-ui/core/Button';
// import Home from '../../components/Home/Home';

const Home: React.FC = () => {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
};

function HomeContainer() {
  return <Home />;
}

export default HomeContainer;
