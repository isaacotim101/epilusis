import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BecomeVolunteer = () => {
  return (
    <section className="become-volunteer">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="become-volunteer__inner">
              <div className="become-volunteer__left">
                <h2>
                  Interpretation of Scripture and <br />Practical Application
                </h2>
                <div className="become-volunteer__big-text">
                  <h2>Epilusis Ministries International</h2>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeVolunteer;
