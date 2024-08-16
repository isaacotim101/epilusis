import Link from "next/link";
import { Col, Container, Image, Row } from "react-bootstrap";
import SingleNews from "./SingleNews";
import mainSliderData from "@/data/mainSliderData";
import React, { useEffect, useState} from 'react';
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
} from "swiper";

import { Swiper } from "swiper/react";
import SingleSlide from "./SingleSlide";
import axios from 'axios';
import VideoReshufle from './VideosReshufle'; 
import youtubeData from "@/data/sermons.json";
SwiperCore.use([Autoplay, Navigation, EffectFade]);
const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};
const NewsOne = () => {
  const [videos, setVideos] = useState([]);
    useEffect(() => {
    // Set initial state with imported data after component mounts
    setVideos(youtubeData.items);
  }, []); 
  
        
  return (
    <section className="news-one">
      <Container>
        <Row>
          <Col xl={8} lg={8}>
            <div className="section-title text-left">
              <h2 className="section-title__title">
                Latest Sermons
              </h2>
            </div>
          </Col>
        </Row><br />
        <Row>
          <Col xl={6} lg={6}>
          <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
          <div className="swiper-wrapper">
            {videos.map((video) => (
              <SingleSlide key={video.id.videoId} video={video} />
            ))}
          </div>
          <div className="swiper-pagination" id="main-slider-pagination"></div>
          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-prev"
            >
              <i className="icon-right-arrow icon-left-arrow"></i>
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-next"
            >
              <i className="icon-right-arrow"></i>
            </div>
          </div>
        </Swiper>
          </Col>
          <Col xl={6} lg={6}>
            <VideoReshufle />
          </Col>
        </Row>
        
        <Row>
          <Col xl={8} lg={8}>
            <div className="section-title text-left">
              <h2 className="section-title__title">
                
              </h2>
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <div className="news-one__button-box">
              
        <Link href="/sermons">
              <a className="news-one__btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>View More
              </a>
        </Link>
            </div>
          </Col>
        </Row><br />
      </Container>
    </section>
  );
};

export default NewsOne;
