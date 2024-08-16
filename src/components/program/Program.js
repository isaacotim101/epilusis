import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProgramDetails from "../ProgramOne/ProgramDetails";

const ProgramPage = () => {
  return (
    <section className="causes-one causes-page">
      <Container>
        <Row>
            <Col>
              <ProgramDetails />
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProgramPage;
