import './App.scss';

import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Footer from '../src/components/globals/Footer';
import Navbar from '../src/components/globals/Navbar';
import Login from './components/account/Login';
import PasswordForgot from './components/account/PasswordForgot';
import UserAccount from './components/account/UserAccount';
import SelectedProduct from './components/collection/SelectedProduct';
import Find from './components/globals/Find';
import About from './pages/About';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path="*" element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/univers" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Rechercher" element={<Find />} />
          <Route path="/compte" element={<Account />} />
          <Route path="/panier/:id" element={<Cart />} />
          <Route path="/panier/" element={<Cart />} />
          <Route path="/moncompte" element={<UserAccount />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/seconnecter" element={<Login />} />
          <Route path="/nouveaumotdepasse" element={<PasswordForgot />} />
          <Route path="/selectedProduct" element={<SelectedProduct />} />
          <Route path="/selectedProduct/:id" element={<SelectedProduct />} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
