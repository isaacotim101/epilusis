import React from "react";
import { Container, Row } from "react-bootstrap";
import CharityContent from "./CharityContent";
import CharityImage from "./CharityImage";

const Charity = () => {
  return (
    <div className="welcome-one">
      <Container>
        <Row>
          <CharityImage />
          <CharityContent />
        </Row>
      </Container>
    </div>
  );
};

export default Charity;
