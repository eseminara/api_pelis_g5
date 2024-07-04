import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import SeriesCard from "./SeriesCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SeriesCarousel = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.episodate.com/api/most-popular?page=1")
      .then((response) => {
        setShows(response.data.tv_shows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };

  return (
    <div>
      <h4 className="text-center text-gray-50 font-extrabold text-6xl py-8 bg-gray-800">
        Series
      </h4>
      <div className="slider-container">
        <Slider {...settings}>
          {shows.map((show) => (
            <SeriesCard key={show.id} show={show} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SeriesCarousel;
