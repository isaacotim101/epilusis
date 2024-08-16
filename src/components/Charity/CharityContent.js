import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useFetch } from "../../hooks/useSWR";
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link'; 

const countBar = [
  {
    id: 1,
    title: "Charity",
    percent: 83,
  },
  {
    id: 2,
    title: "Donations",
    percent: 38,
  },
];

const CharityContent = () => {
  const { GetHomepage } = useFetch();
  const { data: homepage } = GetHomepage();

  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <Col xl={6} lg={6}>
      <div className="welcome-one__right">
        <div className="section-title text-left">
          <span className="section-title__tagline">Welcome to Epilusis Ministries International!</span>
        </div>
        <div className="welcome-one__right-text">
          <p style={{ textAlign: "justify" }}>
            Founded by Apostle Jonathan Kagimu in 2014, Epilusis Ministries International is 
            dedicated to the interpretation and practical application of Scripture. Our name, 
            &quot;Epilusis,&quot; derives from 2 Peter 1:20, &quot;Knowing this first, that no prophecy of the scripture is of any private interpretation.&quot;
            the word interpretation there is the word Epilusis, emphasizing the importance of understanding 
            that no prophecy of Scripture is a private interpretation.
          </p>
          <p style={{ textAlign: "justify" }}>
            In a world where many struggle to comprehend the Word of God and apply it to their lives, 
            we aim to bridge that gap. Our fellowship provides a nurturing environment where individuals 
            can come together to explore the realities of Scripture interpretation and practical application.
          </p>
          <p style={{ textAlign: "justify" }}>
            Join us at Epilusis Ministries International and embark on a journey of discovery, 
            enlightenment, and empowerment through the interpretation and practical application of God&apos;s Word.
          </p>
        </div>
        <div className="welcome-one__our-mission-and-story">
          <div className="welcome-one__mission-and-story-single">
            <h3>
              <i className="fas fa-arrow-circle-right"></i>Mission
            </h3>
            <p className="welcome-one__our-mission-and-story-text">
              To minister to people God&aposs Truth and Love so they can be transformed in every area of their lives.
            </p>
          </div>
          <div className="welcome-one__mission-and-story-single">
            <h3>
              <i className="fas fa-arrow-circle-right"></i>Our Vision
            </h3>
            <p className="welcome-one__our-mission-and-story-text">
              Knowing this first, that no prophecy of the scripture is of any private interpretation.
            </p>
          </div>
        </div>
        <Link href="/about">
          <a className="welcome-one__btn thm-btn">
            <i className="fas fa-arrow-circle-right"></i>Read More
          </a>
        </Link>
      </div>
    </Col>
  );
};

export default CharityContent;
