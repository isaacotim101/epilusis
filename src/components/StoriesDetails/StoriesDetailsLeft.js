import React, { useEffect, useState } from 'react';
import { Image } from "react-bootstrap";
import axios from "axios";
import DOMPurify from 'isomorphic-dompurify'; // Import DOMPurify from isomorphic-dompurify

const CausesDetailsLeft = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const paramValue = window.location.search;
    const urlParams = new URLSearchParams(paramValue);
    const param = urlParams.get('id');
    
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('https://african-hearts-api.vercel.app/api/v1/success/' + param, {});
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  // Define a function to sanitize HTML
  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <div className="causes-details__left-bar">
      <div className="causes-details__img">
        <div className="causes-details__img-box">
          <Image src={data.image} alt="" />
        </div>
      </div>
      <div className="causes-details__text-box">
        <h3>{data.title}</h3>
        {/* Sanitize data.description before rendering */}
        <p className={`causes-details__text-}`} dangerouslySetInnerHTML={sanitizeHTML(data.description)} />
      </div>
    </div>
  );
};

export default CausesDetailsLeft;
