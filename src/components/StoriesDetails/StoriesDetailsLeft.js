import React, { useEffect, useState} from 'react';
import { Image } from "react-bootstrap";
import axios from "axios";



const CausesDetailsLeft = () => {
  const [data, setData] = useState([])

    useEffect(() => {
      const paramValue = window.location.search;
      const urlParams = new URLSearchParams(paramValue);
      const param =  urlParams.get('id');
      const fetchData = async () =>{
        try {
          const {data: response} = await axios.get('https://african-hearts-api.vercel.app/api/v1/success/'+param, {

          });
          setData(response);
          setRaisedData(response.data.raised);
          setGoalData(response.data.goal);
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
      </div>
      <div className="causes-details__text-box">
        <h3>{data.title}</h3>
          <p className={`causes-details__text-}`}>
            {data.body}
          </p>
      </div>
      
    </div>
    
  );
};

export default CausesDetailsLeft;