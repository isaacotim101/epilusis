import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleUpdates from "../UpdatesTwo/SingleUpdate";

const UpdatePage = () => {
  return (
    <section className="news-page">
      <Container>
        <Row>
            <SingleUpdates/>
        </Row>
      </Container>
    </section>
  );
};

export default UpdatePage;
