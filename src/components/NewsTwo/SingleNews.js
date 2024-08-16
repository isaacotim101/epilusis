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
import { React, useState } from "react";

const cards = [1, 2, 3];


export default function Album() {
          // SWR call for all permissions
        const { GetBlogs } = useFetch();
        const { data: blogs } = GetBlogs();
        const [readMore, setReadMore] = useState(false);

  return (
        <Container sx={{ py: 12 }} maxWidth="md">
		        <Row>
          <Col xl={8} lg={8}>
            <div className="section-title text-left">
              <span className="section-title__tagline">Our Blog</span>
              <h2 className="section-title__title">
                Latest Blogs & articles, <br />
                African Hearts
              </h2>
            </div>
          </Col>
        </Row>
          <Grid container spacing={1}>
      	{blogs?.map((blogs) => (
              <Grid item key={blogs.post_id} xs={12} sm={6} md={4}>
                <Card>
				  <div className="news-one__left">
              <div className="news-one__img">
				<CardMedia
                    component="img"
                     image={blogs.post_featured_image}
					 height="250px"
                  />
                <Link href={`/news-details?id=${blogs.post_id}`}>
                  <a  className="news-one__title">
                    Read More
                  </a>
                </Link>
				
              </div>
              <div className="news-one__bottom">
                <ul className="list-unstyled news-one__meta">
                  <li>{blogs.post_auther}</li>
                  <li>
                    <span>|</span>
                  </li>
                  <li>{blogs.post_created_at}
                  </li>
                </ul>
                <h3 className="news-one__title">
                    {blogs.post_title}
                </h3>
              </div>
            </div>
                </Card>
                <p className="news-two__text">{readMore ? blogs.post_description : `${blogs.post_description.substring(0, 300)}...`}
            </p>
            <a href={`/news-details?id=${blogs.post_id}`} className="footer-widget__about-btn">
                  Read More
                </a>
              </Grid>
            ))}
          </Grid>
        </Container>
  );
}