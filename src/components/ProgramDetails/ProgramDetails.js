import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProgramDetailsLeft from "./ProgramDetailsLeft";
import ProgramDetailsRight from "./ProgramDetailsRight";

const ProgramDetailsPage = () => {
  return (
    <section className="causes-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <ProgramDetailsLeft />
          </Col>
          <Col xl={4} lg={5}>
            <ProgramDetailsRight />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProgramDetailsPage;
