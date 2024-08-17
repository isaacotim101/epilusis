import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

// Import the images directly
import brand1 from "@/images/resources/brand_1.png";
import brand2 from "@/images/resources/brand_2.png";
import brand3 from "@/images/resources/brand_3.png";
import brand4 from "@/images/resources/brand_4.png";
import brand5 from "@/images/resources/brand_5.png";
import brand6 from "@/images/resources/brand_6.png";
import brand7 from "@/images/resources/brand_7.png";
import brand8 from "@/images/resources/brand_8.png";
import brand9 from "@/images/resources/brand_9.png";
import brand10 from "@/images/resources/brand_10.png";
import brand11 from "@/images/resources/brand_11.png";
import brand12 from "@/images/resources/brand_12.png";
import brand13 from "@/images/resources/brand_13.png";
import brand14 from "@/images/resources/brand_14.png";
import brand15 from "@/images/resources/brand_15.png";
import brand16 from "@/images/resources/brand_16.png";
import brand17 from "@/images/resources/brand_17.png";
import brand18 from "@/images/resources/brand_18.png";
import brand19 from "@/images/resources/brand_19.png";
import brand20 from "@/images/resources/brand_20.png";

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
    576: { items: 2, gutter: 10 },
    768: { items: 3, gutter: 15 },
    992: { items: 4, gutter: 15 },
    1200: { items: 3, gutter: 20 },
  },
};

// Define the brandOne array using the imported images
const brandOne = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
  brand17,
  brand18,
  brand19,
  brand20,
];

const BrandOne = ({ brandClass = "" }) => {
  return (
    <section className={`brand-one ${brandClass}`}>
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Daily inspiration</span>
        </div>
        <Row>
          <Col xl={12}>
            <TinySlider settings={settings} className="brand-one__carousel">
              {brandOne.map((image, index) => (
                <div key={index}>
                  <div
                    style={{ userSelect: "none" }}
                    className="brand-one__single"
                  >
                    <div className="brand-one__img">
                      <Image
                        src={image.src}
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TinySlider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrandOne;
