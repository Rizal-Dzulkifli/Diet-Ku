import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LR/LandingPage.jsx';
import Beranda from './components/Beranda.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route
          path="/masuk"
          element={<LandingPage history={history} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
