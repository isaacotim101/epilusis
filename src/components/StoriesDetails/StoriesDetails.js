import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import StoriesDetailsLeft from "./StoriesDetailsLeft";
import StoriesDetailsRight from "./StoriesDetailsRight";

const StoriesDetailsPage = () => {
  return (
    <section className="causes-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <StoriesDetailsLeft />
          </Col>
          <Col xl={4} lg={5}>
            <StoriesDetailsRight />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StoriesDetailsPage;