import React from "react";
import { Col, Image } from "react-bootstrap";
import Apostle from "@/images/apostle.png";

const CharityImage = () => {
  
  return (
    <Col xl={6} lg={6}>
      <div className="welcome-one__left" >
        <div className="welcome-one__img-box">
          <Image src={Apostle.src} alt="" />
        </div>
      </div>
    </Col>
  );
};

export default CharityImage;
