import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectsDetails from "../ProjectsOne/ProjectsDetails";

const ProjectsPage = () => {
  return (
    <section className="causes-one causes-page">
      <Container>
        <Row>
            <Col>
              <ProjectsDetails />
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsPage;