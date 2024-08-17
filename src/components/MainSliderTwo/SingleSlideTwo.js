import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleSlideTwo = ({ slide = {} }) => {
  const { bg, subTitle, title, href } = slide;

  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="image-layer-overlay"></div>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <div className="main-slider__content">
              <p>{subTitle}</p>
              <h2>
                {title} 
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlideTwo;
