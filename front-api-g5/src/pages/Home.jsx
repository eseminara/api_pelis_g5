import React from 'react';
import Carousel from '../components/Carousel';
import MoviesCarousel from '../components/MoviesCarousel';
import SeriesCarousel from '../components/SeriesCarousel';

const Home = () => {
  return (
    <div>
      <Carousel />
      <MoviesCarousel />
      <SeriesCarousel />

      <div className="container mx-auto">
        {/* Aquí va el contenido del home */}
      </div>
    </div>
  );
}

export default Home;