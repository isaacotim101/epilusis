import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SponsorDetailsLeft from "./SponsorDetailsLeft";
import SponsorDetailsRight from "./SponsorDetailsRight";

const CausesDetailsPage = () => {
  return (
    <section className="causes-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <SponsorDetailsLeft />
          </Col>
          <Col xl={4} lg={5}>
            <SponsorDetailsRight />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CausesDetailsPage;
