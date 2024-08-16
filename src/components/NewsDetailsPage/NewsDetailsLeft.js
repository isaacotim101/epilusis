import DOMPurify from 'isomorphic-dompurify'; // Import DOMPurify from isomorphic-dompurify
import React, { useEffect, useState } from 'react';
import { Image } from "react-bootstrap";
import axios from "axios";

const NewsDetailsLeft = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const paramValue = window.location.search;
    const urlParams = new URLSearchParams(paramValue);
    const param = urlParams.get('id');

    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('https://african-hearts-api.vercel.app/api/v1/blogs/' + param, {});
        setData(response);
      } catch (error) {
        window.location.href = "/news";
      }
    }

    fetchData();
  }, []);

  // Define a function to sanitize HTML
  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  // Function to format ISO timestamp to human-readable time
  const formatTimestamp = (isoTimestamp) => {
    const date = new Date(isoTimestamp);
    return date.toLocaleString(); // Use this for a default format, you can customize it further
  };

  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image src={data.post_featured_image} alt="" width="770px" height="414px" />
      </div>
      <div className="news-details__content">
        <ul className="list-unstyled news-details__meta">
          <li>
            <i className="far fa-user-circle"></i> {data.post_auther}
          </li>
          <li>
            <span>|</span>
          </li>
          <li>
            <i className=""></i> {formatTimestamp(data.post_created_at)}
          </li>
        </ul>
        <h3 className="news-details__title">{data.post_title}</h3>
        {/* Sanitize data.post_description before rendering */}
        <p className="news-details__text-one" dangerouslySetInnerHTML={sanitizeHTML(data.post_description)} />
      </div>
    </div>
  );
};

export default NewsDetailsLeft;
