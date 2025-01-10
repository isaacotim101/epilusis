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
				<span style="font-family:Cambria">Founded in 2014 by </span><span class="Strong" style="font-family:Cambria; font-weight:normal">Apostle Jonathan Kagimu</span><strong><span style="font-family:Cambria; ">, </span></strong><span class="Strong" style="font-family:Cambria; font-weight:normal">Epilusis Ministries International</span><span style="font-family:Cambria"> is dedicated to empowering God’s people with </span><span class="Strong" style="font-family:Cambria; font-weight:normal">deep knowledge, sound interpretation, and practical application</span><strong><span style="font-family:Cambria; "> </span></strong><span style="font-family:Cambria">of the Word. Our mission is to cultivate transformation in individuals, equipping them to </span><span class="Strong" style="font-family:Cambria; font-weight:normal">impact their communities and nations</span><span style="font-family:Cambria"> through the power of Scripture.</span>
			</p>
			<p class="NormalWeb" style="margin-top:14pt; margin-bottom:14pt">
				<span style="font-family:Cambria">The name </span><span class="Strong" style="font-family:Cambria">“Epilusis”</span><span style="font-family:Cambria"> is drawn from </span><span class="Strong" style="font-family:Cambria">2 Peter 1:20 (KJV)</span><span style="font-family:Cambria">: </span><span class="Emphasis" style="font-family:Cambria">“Knowing this first, that no prophecy of the scripture is of any private interpretation.”</span><span style="font-family:Cambria"> The Greek word </span><span class="Strong" style="font-family:Cambria">"Epilusis"</span><span style="font-family:Cambria"> in this verse means </span><span class="Strong" style="font-family:Cambria; font-weight:normal">interpretation and practical application</span><span style="font-family:Cambria">—a core emphasis of our ministry.</span>
			</p>
			<p class="NormalWeb" style="margin-top:14pt; margin-bottom:14pt">
				<span style="font-family:Cambria">In a world where many struggle to understand and apply </span><span class="Strong" style="font-family:Cambria; font-weight:normal">the Word of God</span><span style="font-family:Cambria">, we exist to </span><span class="Strong" style="font-family:Cambria; font-weight:normal">bridge that gap</span><strong><span style="font-family:Cambria; ">.</span></strong><span style="font-family:Cambria"> Through </span><span class="Strong" style="font-family:Cambria; font-weight:normal">teaching and discipleship</span><span style="font-family:Cambria">, Epilusis Ministries provides a nurturing environment where believers can </span><span class="Strong" style="font-family:Cambria; font-weight:normal">explore the depths of Scripture, experience true transformation, and walk in the fullness of their divine calling.</span>
			</p>
			<p class="NormalWeb" style="margin-top:14pt; margin-bottom:14pt">
				<span class="Strong" style="font-family:Cambria; font-weight:normal">Currently, the ministry reaches out to prisons, schools, evangelism missions across the nation of Uganda. </span>
			</p>
			<h3 style="margin-top:14pt; margin-bottom:14pt; font-size:12pt">
				<span class="Strong" style="font-family:Cambria">&#xa0;</span>
			</h3>
			<h3 style="margin-top:14pt; margin-bottom:14pt; font-size:12pt">
				<span class="Strong" style="font-family:Cambria">Our History: </span>
			</h3>
			<p class="NormalWeb" style="margin-top:14pt; margin-bottom:14pt">
				<span style="font-family:Cambria">Epilusis was founded in </span><span class="Strong" style="font-family:Cambria; font-weight:normal">2014</span><strong><span style="font-family:Cambria; "> </span></strong><span style="font-family:Cambria">as a </span><span class="Strong" style="font-family:Cambria; font-weight:normal">revival movement</span><span style="font-family:Cambria"> aimed at equipping and empowering </span><span class="Strong" style="font-family:Cambria; font-weight:normal">high school students</span><span style="font-family:Cambria">, primarily with students from </span><span class="Strong" style="font-family:Cambria; font-weight:normal">Kyambogo College School</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">and City High</span><span style="font-family:Cambria">. These gatherings, known as </span><span class="Strong" style="font-family:Cambria; font-weight:normal">Epilusis Classes</span><strong><span style="font-family:Cambria; ">,</span></strong><span style="font-family:Cambria"> were not just meetings but intentional spaces where students—many of whom had experienced the </span><span class="Strong" style="font-family:Cambria; font-weight:normal">baptism of the Holy Spirit</span><span style="font-family:Cambria">—could be </span><span class="Strong" style="font-family:Cambria; font-weight:normal">deeply grounded in the</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">Word of God</span><strong><span style="font-family:Cambria; ">.</span></strong>
			</p>
			<p class="NormalWeb" style="margin-top:14pt; margin-bottom:14pt">
				<span style="font-family:Cambria">Much like the early church, where the Spirit fell upon those gathered in the </span><span class="Strong" style="font-family:Cambria; font-weight:normal">upper room</span><span style="font-family:Cambria"> (</span><span class="Emphasis" style="font-family:Cambria">Acts 2:1-4</span><span style="font-family:Cambria">), these students experienced a fresh move of God. But just as the believers in the early church were led to </span><span class="Strong" style="font-family:Cambria; font-weight:normal">Antioch</span><span style="font-family:Cambria">, where they received </span><span class="Strong" style="font-family:Cambria; font-weight:normal">much teaching</span><span style="font-family:Cambria"> (</span><span class="Emphasis" style="font-family:Cambria">Acts 11:26 KJV</span><span style="font-family:Cambria">), Epilusis Classes became a place of </span><span class="Strong" style="font-family:Cambria; font-weight:normal">spiritual</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">formation</span><span style="font-family:Cambria">, ensuring that young believers were not only </span><span class="Strong" style="font-family:Cambria; font-weight:normal">filled with</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">the</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">Spirit</span><span style="font-family:Cambria"> but also </span><span class="Strong" style="font-family:Cambria; font-weight:normal">rooted</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">in</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">biblical</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">truth</span><span style="font-family:Cambria">.</span>
			</p>
			<p class="NormalWeb" style="margin-top:14pt; margin-bottom:14pt">
				<span style="font-family:Cambria">Over the years, </span><span class="Strong" style="font-family:Cambria; font-weight:normal">Epilusis</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">has</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">evolved</span><span style="font-family:Cambria"> in response to </span><span class="Strong" style="font-family:Cambria; font-weight:normal">God’s</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">leading</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">and</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">the</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">divine demands</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">of</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">the</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">season</span><span style="font-family:Cambria">. What began as a </span><span class="Strong" style="font-family:Cambria; font-weight:normal">discipleship</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">class</span><span style="font-family:Cambria"> soon grew into a </span><span class="Strong" style="font-family:Cambria; font-weight:normal">fellowship</span><span style="font-family:Cambria">, and today, Epilusis stands as a </span><span class="Strong" style="font-family:Cambria; font-weight:normal">mission</span><span class="Strong" style="font-family:Cambria">-</span><span class="Strong" style="font-family:Cambria; font-weight:normal">oriented</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">ministry</span><span style="font-family:Cambria"> with a </span><span class="Strong" style="font-family:Cambria; font-weight:normal">vision</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">to</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">plant</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">churches</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">and</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">establish</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">a home</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">church</span><span style="font-family:Cambria">—a place where believers are </span><span class="Strong" style="font-family:Cambria; font-weight:normal">equipped, empowered, and sent</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">out</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">to</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">transform</span><span class="Strong" style="font-family:Cambria"> </span><span class="Strong" style="font-family:Cambria; font-weight:normal">nations.</span>
			</p>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
