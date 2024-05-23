import React from "react";
import Slider from "react-slick";
import img1 from "../../../assets/slider-image-1.jpeg";
import img2 from "../../../assets/slider-image-2.jpeg";
import img3 from "../../../assets/slider-image-3.jpeg";
import Image from "next/image.js";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container my-lg-1">
      <Slider {...settings}>
        <div>
          <Image src={img1} alt="" className="w-100" />
        </div>
        <div>
          <Image src={img2} alt="" className="w-100" />
        </div>
        <div>
          <Image src={img3} alt="" className="w-100" />
        </div>
      </Slider>
    </div>
  );
}
