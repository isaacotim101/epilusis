import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectsDetailsLeft from "./ProjectsDetailsLeft";
import ProjectsDetailsRight from "./ProjectsDetailsRight";

const ProjectsDetailsPage = () => {
  return (
    <section className="causes-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <ProjectsDetailsLeft />
          </Col>
          <Col xl={4} lg={5}>
            <ProjectsDetailsRight />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsDetailsPage;