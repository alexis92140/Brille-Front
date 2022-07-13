import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ShoppingCartProvider } from './Context/ShoppingCartContext';

ReactDOM.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
