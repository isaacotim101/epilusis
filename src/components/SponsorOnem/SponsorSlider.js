import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import React, { useState } from "react";
import { useFetch } from "../../hooks/useSWR";
import Link from "next/link";
import { Container, Image } from "react-bootstrap";

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
  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };
  // const percent = Math.round((raisedNumber / goalNumber) * 100);
          // SWR call for all permissions
          const { GetSponsor } = useFetch();
          const { data: projects } = GetSponsor();  
          const raisedNumber = 6500;
          const goalNumber = 50000;      
          const percent = Math.round((raisedNumber / goalNumber) * 100);
  return (
        <Container sx={{ py: 12 }} maxWidth="xl">
          <div className="">
          <Grid container spacing={1}>
            {projects?.map((projects) => (
              <Grid item key={projects._id} xs={12} sm={6} md={4}>
                <Card>
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                <Image
                  src={projects.image}
                  alt=""
                  height='250px'
                />
              </div>
            </div>
            <div className="causes-one__content">
              <h3 className="causes-one__title">
                <Link href={`/sponsor-details?id=${projects._id}`}>{projects.title}</Link>
              </h3>
              </div>
            <a href={`/sponsor-details?id=${projects._id}`} className="footer-widget__about-btn">
                  <i className="fa fa-heart"></i>Donate
                </a>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
          </div>
        </Container>
  );
}
