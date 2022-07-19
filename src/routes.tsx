import React from 'react';
import { RouteObject } from 'react-router-dom';

import Login from './components/account/Login';
import PasswordForgot from './components/account/PasswordForgot';
import UserAccount from './components/account/UserAccount';
import RightSide from './components/cart/RightSide';
import SelectedProduct from './components/collection/SelectedProduct';
import Find from './components/globals/Find';
import About from './pages/About';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Landing from './pages/Landing';

// >> ALL THE APP ROUTES CONFIG

const routesConfig: RouteObject[] = [
  {
    // ! Route : HOMEPAGE
    path: '*',
    element: <Landing />,
  },
  {
    // ! Route : HOMEPAGE
    path: '/',
    element: <Landing />,
  },
  {
    // ! Route : HOMEPAGE
    path: '/home',
    element: <Landing />,
  },
  {
    // ! Route : COLLECTION items
    path: '/collection',
    element: <Collection />,
  },
  {
    // ! Route : ABOUT ("Brille" universe)
    path: '/univers',
    element: <About />,
  },
  {
    // ! Route : CONTACT
    path: '/contact',
    element: <Contact />,
  },
  {
    // ! Route : FIND
    path: '/Rechercher',
    element: <Find />,
  },
  {
    // ! Route : ACCOUNT >>> REGISTER)
    path: '/compte',
    element: <Account />,
  },
  {
    // ! Route : ACCOUNT >>> LOGIN
    path: '/seconnecter',
    element: <Login />,
  },
  {
    // ! Route : ACCOUNT >>> USER
    path: '/moncompte',
    element: <UserAccount />,
  },
  {
    // ! Route : ACCOUNT >>> PASSWORD RESET
    path: '/nouveaumotdepasse',
    element: <PasswordForgot />,
  },
  {
    // ! Route : CART
    path: '/panier',
    element: <Cart />,

    // ! Route : CART (item by id)
    children: [
      {
        path: '/panier/:id',
        element: <Cart />,
      },
      {
        path: '/panier/:id',
        element: <RightSide />,
      },
    ],
  },
  {
    // ! Route : SELECTED ITEM
    path: '/selectedProduct',
    element: <SelectedProduct />,

    // ! Route : SELECTED ITEM (by id)
    children: [
      {
        path: '/selectedProduct/:id',
        element: <SelectedProduct />,
      },
      {
        path: '/selectedProduct/:id',
        element: <RightSide />,
      },
    ],
  },
];

export default routesConfig;
