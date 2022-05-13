import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./playingSlider.css"
import playingSlider01 from "../img/playing_slider01.png"
import playingSlider02 from "../img/playing_slider02.png"
import playingSlider03 from "../img/playing_slider03.png"

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="my_slider">
          <img src={playingSlider01}></img>
          <img src={playingSlider02}></img>
          <img src={playingSlider03}></img>
        </div>
        <div className="my_slider">
          <img src={playingSlider01}></img>
          <img src={playingSlider02}></img>
          <img src={playingSlider03}></img>
        </div>
        <div className="my_slider">
          <img src={playingSlider01}></img>
          <img src={playingSlider02}></img>
          <img src={playingSlider03}></img>
        </div>
        <div className="my_slider">
          <img src={playingSlider01}></img>
          <img src={playingSlider02}></img>
          <img src={playingSlider03}></img>
        </div>
      </Slider>
    );
  }
  