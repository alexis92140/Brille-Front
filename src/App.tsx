import './App.scss';

import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';

import Footer from '../src/components/globals/Footer';
import Navbar from '../src/components/globals/Navbar';
import routesConfig from './routes';

const [currentUser, setCurrentUser] = useState(undefined);

useEffect(() => {
  const user = AuthService.getCurrentUser();

  if (user) {
    setCurrentUser(user);
  }
}, []);

const logOut = () => {
  AuthService.logout();
};

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
