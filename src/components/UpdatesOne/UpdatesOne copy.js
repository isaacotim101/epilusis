import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useFetch } from "../../hooks/useSWR";
import { Col, Container, Image, Row } from "react-bootstrap";

const cards = [1, 2, 3];


export default function Album() {
          // SWR call for all permissions
          const { GetUpdates } = useFetch();
          const { data: updates } = GetUpdates();
              // Function to format ISO timestamp to human-readable time
    const formatTimestamp = (isoTimestamp) => {
      const date = new Date(isoTimestamp);
      return date.toLocaleString(); // Use this for a default format, you can customize it further
    };
  return (
        <Container sx={{ py: 12 }} maxWidth="md">
		        <Row>
              <br></br>
          <Col xl={8} lg={8}>
            <div className="section-title text-left"><br></br>
              <span className="section-title__tagline">Our Updates</span>
              <h2 className="section-title__title">
                Latest Updates, <br />
                African Hearts
              </h2>
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <div className="news-one__button-box">
              <a href="/updates" className="news-one__btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>View More
              </a>
            </div>
          </Col>
        </Row>
          <Grid container spacing={1}>
      	{updates?.map((updates) => (
              <Grid item key={updates._id} xs={12} sm={6} md={4}>
                <Card>
				  <div className="news-one__left">
              <div className="news-one__img">
				<CardMedia
                    component="img"
                     image={updates.update_featured_image}
					 height="250px"
                  />
                <Link href={`/updates-details?id=${updates._id}`}>
                  <a  className="news-one__title">
                    Read More
                  </a>
                </Link>
				
              </div>
              <div className="news-one__bottom">
                <ul className="list-unstyled news-one__meta">
                  <li>{updates.update_auther}</li>
                  <li>
                    <span>|</span>
                  </li>
                  <li>
                    <a href={`/updates-details?id=${updates._id}`}>{formatTimestamp(updates.update_created_at)}</a>
                  </li>
                </ul>
                <h3 className="news-one__title">
                  <Link href={`/updates-details?id=${updates._id}`}>
                    <a>{updates.update_title}</a>
                  </Link>
                </h3>
              </div>
            </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  );
}