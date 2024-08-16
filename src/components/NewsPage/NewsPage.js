import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleNews from "../NewsTwo/SingleNews";

const NewsPage = () => {
  return (
    <section className="news-page">
      <Container>
        <Row>
            <SingleNews/>
        </Row>
      </Container>
    </section>
  );
};

export default NewsPage;
