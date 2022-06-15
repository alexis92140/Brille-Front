import './App';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={} />
          <Route path="/home" element={} />
          <Route path="/about" element={} />
          <Route path="/eshop" element={} />
          <Route path="/home" element={} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
