import newsDetails from "@/data/newsDetails";
import React, { useEffect, useState} from 'react';
import { Image } from "react-bootstrap";
import axios from "axios";

const {
  image,
} = newsDetails;

const NewsDetailsLeft = () => {
    if (typeof window !== 'undefined') {
    }
 
const [data, setData] = useState([])

useEffect(() => {
    //

    const paramValue = window.location.search;
    const urlParams = new URLSearchParams(paramValue);
    const param =  urlParams.get('id');
    
    //
  const fetchData = async () =>{
    try {
      const {data: response} = await axios.get('https://african-hearts-api.vercel.app/api/v1/blogs/'+param, {

      });
      setData(response);
    } catch (error) {
      window.location.href = "/news";
    }
  }

  fetchData();
}, []);
  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image src={data.post_featured_image} alt="" width="770px" height="414px"/>
      </div>
      <div className="news-details__content">
        <ul className="list-unstyled news-details__meta">
          <li>
              <i className="far fa-user-circle"></i> by {data.post_auther}
          </li>
          <li>
            <span>|</span>
          </li>
          <li>
              <i className=""></i> {data.post_created_at}
          </li>
        </ul>
        <h3 className="news-details__title">{data.post_title}</h3>
        <p className="news-details__text-one">{data.post_description}</p>
      </div>
      
    </div>
  );
};

export default NewsDetailsLeft;
