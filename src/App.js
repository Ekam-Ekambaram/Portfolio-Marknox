import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';

import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
        <Route path="/" Component={LandingPage} />
        {/* Add more routes as needed */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
