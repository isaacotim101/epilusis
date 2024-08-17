import causesDetails from "@/data/causesDetails";
import React, { useEffect, useState} from 'react';
import { Col, Image, Row } from "react-bootstrap";
import axios from "axios";

const {
  raised,
  goal,
} = causesDetails;

const CausesDetailsLeft = () => {
  const [data, setData] = useState([])
  const [raisedData, setRaisedData] = useState([])
  const [goalData, setGoalData] = useState([])

    useEffect(() => {
      const paramValue = window.location.search;
      const urlParams = new URLSearchParams(paramValue);
      const param =  urlParams.get('id');
      const fetchData = async () =>{
        try {
          const {data: response} = await axios.get('https://african-hearts-api.vercel.app/africanbase/v1/cause/'+param, {

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

  const raisedNumber = +raised.split(",").join("");
  const goalNumber = +goal.split(",").join("");
  const percent = Math.round((raisedNumber / goalNumber) * 100) + "%";

  return (
  <div className="causes-details__left-bar">
      <div className="causes-details__img">
        <div className="causes-details__img-box">
          <Image src={data.cause_image} alt="" />
          <div className="causes-details__category">
            <span>{data.cause_catergory}</span>
          </div>
        </div>
        <div className="causes-details__progress">
          <div className="bar">
            <div
              className="bar-inner count-bar"
              style={{ width: percent, opacity: 1 }}
              data-percent={percent}
            >
              <div style={{ opacity: 1 }} className="count-text">
                {percent}
              </div>
            </div>
          </div>
          <div className="causes-details__goals">
            <p>
              <span>${data.cause_raised}</span> Raised
            </p>
            <p>
              <span>${data.cause_goal}</span> Goal
            </p>
          </div>
        </div>
      </div>
      <div className="causes-details__text-box">
        <h3>{data.cause_title}</h3>
          <p className={`causes-details__text-}`}>
            {data.cause_description}
          </p>
      </div>
      <div className="causes-details__images-box">
        <Row>
          <Col xl={6} lg={6}>
              <div className="causes-details__images-single">
                <Image src={data.cause_image} alt="" />
              </div>
            </Col>
          <Col xl={6} lg={6}>
              <div className="causes-details__images-single">
                <Image src={data.cause_image} alt="" />
              </div>
            </Col>
        </Row>
      </div>
      <div className="causes-details__download">
        <div className="causes-details__left">
          <div className="text">
            <h4>Make a Donation Now</h4>
          </div>
        </div>
        <div className="causes-details__download-btn-box">
          <a href={`/donation?id=${data.cause_id}`} className="causes-details__download-btn thm-btn">
            <i className="fas fa-arrow-circle-right"></i>Download Now
          </a>
        </div>
      </div>
    </div>
    
  );
};

export default CausesDetailsLeft;
