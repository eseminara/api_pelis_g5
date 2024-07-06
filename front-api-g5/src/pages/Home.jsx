import React from "react";
import Carousel from "../components/Carousel";
import SeriesCarousel from "../components/SeriesCarousel";
import MoviesCarousel from "../components/MoviesCarousel";

function Home() {
  return (
    <div className="bg-slate-50 text-slate-950">
      <Carousel />
      <MoviesCarousel />
      <SeriesCarousel />
    </div>
  );
}

export default Home;
