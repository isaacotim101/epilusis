import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";
import DOMPurify from 'isomorphic-dompurify';
import Apostle from "@/images/ap1.jpg";

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
						Founded in 2014 by Apostle Jonathan Kagimu, Epilusis Ministries International is dedicated to empowering God’s people with deep knowledge, sound interpretation, and practical application of the Word. Our mission is to cultivate transformation in individuals, equipping them to impact their communities and nations through the power of Scripture.

				</p>
			
			<p style={{ textAlign: "justify" }}>
			The name &quot;Epilusis&quot; is drawn from 2 Peter 1:20 (KJV): &quot;Knowing this first, that no prophecy of the scripture is of any private interpretation.&quot; The Greek word &quot;Epilusis&quot; in this verse means interpretation and practical application—a core emphasis of our ministry.

			</p>
			<p style={{ textAlign: "justify" }}>
			In a world where many struggle to understand and apply the Word of God, we exist to bridge that gap. Through teaching and discipleship, Epilusis Ministries provides a nurturing environment where believers can explore the depths of Scripture, experience true transformation, and walk in the fullness of their divine calling.

			</p>
			<p style={{ textAlign: "justify" }}>
			Currently, the ministry reaches out to prisons, schools, evangelism missions across the nation of Uganda. 
			</p>
			
			
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
