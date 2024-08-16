import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import StoriesDetails from "../StoriesOne/StoriesDetails";

const CausesPage = () => {
  return (
    <section className="causes-one causes-page">
      <Container>
        <Row>
            <Col>
              <StoriesDetails />
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CausesPage;