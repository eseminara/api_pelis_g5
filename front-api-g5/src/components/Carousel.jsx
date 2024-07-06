import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../images/001.jpg";
import banner2 from "../images/002.jpg";
import banner3 from "../images/003.jpg";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={banner1} alt="Banner 1" className="w-full h-auto object-cover" />
      </div>
      <div>
        <img src={banner2} alt="Banner 2" className="w-full h-auto object-cover" />
      </div>
      <div>
        <img src={banner3} alt="Banner 3" className="w-full h-auto object-cover" />
      </div>
    </Slider>
  );
}

export default Carousel;
