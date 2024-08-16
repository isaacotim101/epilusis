import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SponsorSingle from "../SponsorOne/SponsorSingle";


const SponsorPage = () => {
  return (
    <section className="causes-one causes-page">
      <Container>
        <Row>
            <Col>
              <SponsorSingle />
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SponsorPage;
