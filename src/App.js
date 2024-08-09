import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" Component={LandingPage} />
        {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
