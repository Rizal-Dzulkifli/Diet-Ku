import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './components/LandingPage.jsx'
import Beranda from './components/Beranda.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/masuk" element={<LandingPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
