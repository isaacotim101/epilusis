import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import ReactVisibilitySensor from "react-visibility-sensor";
import React, { useState } from "react";
import { useFetch } from "../../hooks/useSWR";
import Link from "next/link";
import { Container, Image } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
import DOMPurify from 'dompurify'; // Import DOMPurify

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Album() {
  const [countStart, setCountStart] = useState(false);

  const [readMore, setReadMore] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  // const percent = Math.round((raisedNumber / goalNumber) * 100);
          // SWR call for all permissions
          const { GetSuccess } = useFetch();
          const { data: success } = GetSuccess();  

          const sanitizeHTML = (html) => {
            return { __html: DOMPurify.sanitize(html) };
          }; 
    
  return (
        <Container sx={{ py: 12 }} maxWidth="xl">
          <div className="">
          <Grid container spacing={1}>
            {success?.map((success) => (
              <Grid item key={success._id} xs={12} sm={6} md={4}>
                <Card>
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                <Image
                  src={success.image}
                  alt=""
                  height='250px'
                />
              </div>
            </div>
            <div className="causes-one__content">
              <h3 className="causes-one__title">
                <Link href={`/stories-details?id=${success._id}`}>{success.title}</Link>
              </h3>
              <p className="causes-one__text" dangerouslySetInnerHTML={sanitizeHTML(readMore ? success.description : `${success.description.substring(0, 300)} ....`)} />

            </div>
            <a href={`/stories-details?id=${success._id}`} className="footer-widget__about-btn">
                  <i className="fa fa-book"></i>Read More
                </a>
            
                  
                </Card>
              </Grid>
            ))}
          </Grid>
          </div>
        </Container>
  );
}