import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { ShoppingCartProvider } from './Context/ShoppingCartContext';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
