import causesThree from "@/data/causesThree";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CausesSingle from "../UpdatesOne/UpdateSlider";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  responsive: {
    2000: {
      items: 2,
      gutter: 50,
    },
    2500: {
      items: 3,
      gutter: 60,
    },
  },
};

const CausesThree = () => {
  return (
    <section className="causes-three">
      <Container>
        <div className="causes-three__top">
          <div className="causes-three__top-title">
            <div className="section-title text-left">
              <h2 className="section-title__title">
              Our Updates 
              </h2>
            </div>
          </div>
          <div className="causes-three__top-btn-box">
            <a href="/updates" className="causes-three__top-btn thm-btn">
              <i className="fas fa-arrow-circle-right"></i>View More
            </a>
          </div>
        </div>
        <Row>
          <Col xl={12}>
            <div className="causes-three__carousel owl-theme owl-carousel">
              <TinySlider settings={settings}>
                {causesThree.map((cause) => (
                  <CausesSingle cause={cause} key={cause.id} />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CausesThree;
