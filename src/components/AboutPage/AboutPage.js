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
                <p class="NormalWeb" style="margin-top:14pt; margin-bottom:14pt">
						Founded in 2014 by Apostle Jonathan Kagimu, Epilusis Ministries International is dedicated to empowering God’s people with deep knowledge, sound interpretation, and practical application of the Word. Our mission is to cultivate transformation in individuals, equipping them to impact their communities and nations through the power of Scripture.

				</p>
			<p class="NormalWeb" style="margin-top:14pt; margin-bottom:14pt">
				<span style="font-family:Cambria">The name </span><span class="Strong" style="font-family:Cambria">“Epilusis”</span><span style="font-family:Cambria"> is drawn from </span><span class="Strong" style="font-family:Cambria">2 Peter 1:20 (KJV)</span><span style="font-family:Cambria">: </span><span class="Emphasis" style="font-family:Cambria">“Knowing this first, that no prophecy of the scripture is of any private interpretation.”</span><span style="font-family:Cambria"> The Greek word </span><span class="Strong" style="font-family:Cambria">"Epilusis"</span><span style="font-family:Cambria"> in this verse means </span><span class="Strong" style="font-family:Cambria; font-weight:normal">interpretation and practical application</span><span style="font-family:Cambria">—a core emphasis of our ministry.</span>
			</p>
			<p class="NormalWeb" style="margin-top:14pt; margin-bottom:14pt">
			The name &quot;Epilusis&quot; is drawn from 2 Peter 1:20 (KJV): &quot;Knowing this first, that no prophecy of the scripture is of any private interpretation.&quot; The Greek word &quot;Epilusis&quot; in this verse means interpretation and practical application—a core emphasis of our ministry.

			</p>
			<p class="NormalWeb" style="margin-top:14pt; margin-bottom:14pt">
			In a world where many struggle to understand and apply the Word of God, we exist to bridge that gap. Through teaching and discipleship, Epilusis Ministries provides a nurturing environment where believers can explore the depths of Scripture, experience true transformation, and walk in the fullness of their divine calling.

			</p>
			<p3 style="margin-top:14pt; margin-bottom:14pt; font-size:12pt">
			Currently, the ministry reaches out to prisons, schools, evangelism missions across the nation of Uganda. 
			</h3>
			<hp style="margin-top:14pt; margin-bottom:14pt; font-size:12pt">
				<span class="Strong" style="font-family:Cambria">Our History: </span>
			</h3>
			
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
