import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { CurrentUserContextProvider } from './Context/CurrentUser';
import { ShoppingCartProvider } from './Context/ShoppingCartContext';
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <CurrentUserContextProvider>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </CurrentUserContextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
