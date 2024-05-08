import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LR/LandingPage.jsx';
import Beranda from './components/Beranda.jsx';
import Resep from './components/resep.jsx';
import TentangKami from './components/tentangkami.jsx';
import Kalkulator from './components/kalkulator.jsx';
import Blog from './components/blog.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/resep" element={<Resep />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/kalkulator" element={<Kalkulator />} />
        <Route
          path="/masuk"
          element={<LandingPage history={history} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
