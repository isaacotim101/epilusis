import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import React, { useState } from "react";
import { useFetch } from "../../hooks/useSWR";
import Link from "next/link";
import { Container, Image } from "react-bootstrap";
import DOMPurify from 'dompurify'; // Import DOMPurify



export default function Album() {

  const [readMore, setReadMore] = useState(false);



  // const percent = Math.round((raisedNumber / goalNumber) * 100);
          // SWR call for all permissions
          const { GetProgram } = useFetch();
          const { data: program } = GetProgram();
          const sanitizeHTML = (html) => {
            return { __html: DOMPurify.sanitize(html) };
          };  
      
  return (
        <Container sx={{ py: 12 }} maxWidth="xl">
          <div className="">
          <Grid container spacing={1}>
            {program?.map((program) => (
              <Grid item key={program._id} xs={12} sm={6} md={4}>
                <Card>
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                <Image
                  src={program.image}
                  alt=""
                  height='250px'
                />
              </div>
            </div>
            <div className="causes-one__content">
              <h3 className="causes-one__title">
                <Link href={`/program-details?id=${program._id}`}>{program.title}</Link>
              </h3>
              <p className="causes-one__text" dangerouslySetInnerHTML={sanitizeHTML(readMore ? program.body : `${program.body.substring(0, 200)} ....`)} />

            </div>
            <a href={`/program-details?id=${program._id}`} className="footer-widget__about-btn">
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