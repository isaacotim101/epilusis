import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";
import DOMPurify from 'isomorphic-dompurify';
import Apostle from "@/images/apostle.png";

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
        <Row >
          <Col xl={6}>
            <div className="about-page__left">
              <div className="about-page__img">
          <Image src={Apostle.src} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-page__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">About Epilusis Ministries International</span>
                
              <h3 className="about-page__right-title">
              Interpretation of Scripture and Practical Application.
              </h3>
              </div>
              <p style={{ textAlign: "justify" }}>
                Founded by Apostle Jonathan Kagimu in 2014, Epilusis Ministries International is dedicated to the interpretation and practical application of Scripture. Our name, &quot;Epilusis,&quot; derives from 2 Peter 1:20, &quot;Knowing this first, that no prophecy of the scripture is of any private interpretation.&quot; the word interpretation there is the word Epilusis, emphasizing the importance of understanding that no prophecy of Scripture is a private interpretation.
              </p>
              <p style={{ textAlign: "justify" }}>
                In a world where many struggle to comprehend the Word of God and apply it to their lives, we aim to bridge that gap. Our fellowship provides a nurturing environment where individuals can come together to explore the realities of Scripture interpretation and practical application.
              </p>
              <p style={{ textAlign: "justify" }}>
                Led by Apostle Jonathan Kagimu, our ministry is committed to guiding believers on their journey to understanding and living out the teachings of the Bible. We believe that by delving into the depths of Scripture and applying its principles to our daily lives, we can experience profound spiritual growth and transformation.
              </p>
              <p style={{ textAlign: "justify" }}>
                Join us at Epilusis Ministries International and embark on a journey of discovery, enlightenment, and empowerment through the interpretation and practical application of God&apos;s Word.
              </p>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
