import './App.scss';

import React from 'react';
import { useRoutes } from 'react-router-dom';
import routesConfig from './routes';

import Footer from '../src/components/globals/Footer';
import Navbar from '../src/components/globals/Navbar';

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
