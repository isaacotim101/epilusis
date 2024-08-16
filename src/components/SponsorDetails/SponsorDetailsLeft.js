import React, { useEffect, useState} from 'react';
import { Col, Image, Row } from "react-bootstrap";
import axios from "axios";
import DOMPurify from 'isomorphic-dompurify';


const CausesDetailsLeft = () => {
  const [data, setData] = useState([])

  // Define a function to sanitize HTML
  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  const [readMore, setReadMore] = useState(false);

    useEffect(() => {
      const paramValue = window.location.search;
      const urlParams = new URLSearchParams(paramValue);
      const param =  urlParams.get('id');
      const fetchData = async () =>{
        try {
          const {data: response} = await axios.get('https://african-hearts-api.vercel.app/api/v1/sponsor/'+param, {

          });
          setData(response);
        } catch (error) {
          console.error(error.message);
        }
      }
  
      fetchData();
    }, []);


  return (
  <div className="causes-details__left-bar">
      <div className="causes-details__img">
        <div className="causes-details__img-box">
          <Image src={data.image} alt="" />
          
        </div>
        <div className="causes-details__progress">
          <div className="causes-details__goals">
          <h3>{data.title}</h3><br/>
         
          </div>
          <p className="causes-one__text" dangerouslySetInnerHTML={sanitizeHTML(data.body)} />

        </div>
      </div>
    </div>
    
  );
};

export default CausesDetailsLeft;