import './App.scss';

import React from 'react';
import { useRoutes } from 'react-router-dom';

import Footer from '../src/components/globals/Footer';
import Navbar from '../src/components/globals/Navbar';
import routesConfig from './routes';

function App() {
  const routes = useRoutes(routesConfig);
  return (
    <div className="App">
      <Navbar />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
