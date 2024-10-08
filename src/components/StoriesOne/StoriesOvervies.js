import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import StoriesDetails from "./StoriesDetails";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: true,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  navPosition: "bottom",
  gutter: 0,
  responsive: {
    768: {
      items: 2,
      gutter: 20,
    },
    992: {
      items: 3,
      gutter: 30,
    },
  },
};

const CausesOne = () => {
  return (
    <section className="causes-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Latest Causes</span>
          <h2 className="section-title__title">
            Find the popular cause <br />
            and donate them
          </h2>
        </div>
        <Row >
          <Col>
            <div className="causes-one__carousel">
                  <StoriesDetails/>
                
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CausesOne;
