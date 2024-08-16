import { Col, Container, Image, Row } from "react-bootstrap";
import React, { useEffect, useState} from 'react';
import axios from "axios";
import { styled } from '@mui/material/styles';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';


if (typeof window !== 'undefined') {
}
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    fontSize: 16,
    padding: '30px 26px 10px 50px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    
  },
}));


export default function DonatePage () {
  const [data, setData] = useState([])

  useEffect(() => {
    //
    const paramValue = window.location.search;
    const urlParams = new URLSearchParams(paramValue);
    const param =  urlParams.get('id');
    localStorage.setItem("cause", param);
    //
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get('https://african-hearts-api.vercel.app/api/v1/causes/'+param, {
          
        });
        setData(response);
      } catch (error) {
        window.location.href = "/causes";
      }
    }

    fetchData();
  }, []);


 
  return (
    <section className="contact-page">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Donations Page</span>
          <h2 className="section-title__title">
            Donate towards, {data.cause_title}
          </h2>
        </div>
        <Row>
          <Col xl={6} lg={6}>
            <div className="contact-page__left">
              <div className="contact-page__img">
                <Image src={data.cause_image} alt="" width="100%" height="350px" />
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
          <div   
        className="contact-page__main-form contact-form-validated">
        <Row>
          <Col xl={6}>
          <iframe src="https://global-development-group-project.raisely.com/embed/j902n-african-hearts-uganda?projectNum=J902N&amp;projectName=African%20Hearts%20Uganda" width="250" height="700"></iframe>

          </Col>
        </Row>
      </div>
          </Col>
          <Col xl={12} lg={12}>
            <div className="contact-page__left">
                  <div className="contact-page__contact-info">
                    <ul className="contact-page__contact-list list-unstyled">
                      <li>
                  <div className="causes-details__donations-content">
                    <h5>
                      {data.cause_title}
                    </h5>
                  </div>
                  </li>
                  <li>
                  <div className="causes-details__donations-content">
                    <h4>
                      {data.cause_description}
                    </h4>
                  </div>
                  </li>
                </ul>
              </div>
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};