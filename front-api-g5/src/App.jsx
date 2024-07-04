import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cuenta from './components/Cuenta';
import Favoritos from './pages/Favoritos';
import Peliculas from './components/Peliculas';
import Recuperar from './components/Recuperar';
import Registro from './components/Registro';
import SeriesDetails from "./pages/SeriesDetails";
import Series from './pages/Series';
import Video from './components/Video';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuenta" element={<Cuenta />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/recuperar" element={<Recuperar />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/series/:id" element={<SeriesDetails />} />
          <Route path="/series" element={<Series />} />
          <Route path="/video" element={<Video />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
