import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";
import DOMPurify from 'isomorphic-dompurify';

const AboutPage = () => {
        // SWR call for all permissions
        const { GetAbout } = useFetch();
        const { data: about } = GetAbout();
          const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };  
  };
  return (
    <section className="about-page">
      <Container>
      {about?.map((about) => (
        <Row key={about.about_id}>
          <Col xl={12}>
            <div className="about-page__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">About African Hearts Community Organization</span>
                <h2 className="section-title__title">
                {about.about_header}
                </h2>
              <h3 className="about-page__right-title">
              {about.about_title}
              </h3>
            <div className="about-page__left">
              <div className="about-page__img">
                <Image src={about.about_image} alt="" />
              </div>
            </div>
              </div>
        <p className={`about-page__right-text}`} dangerouslySetInnerHTML={sanitizeHTML(about.about_body)} />
            </div>
          </Col>
        </Row>
            ))}
      </Container>
    </section>
  );
};

export default AboutPage;
