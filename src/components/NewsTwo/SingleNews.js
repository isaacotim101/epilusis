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
import DOMPurify from 'dompurify'; // Import DOMPurify
const cards = [1, 2, 3];


export default function Album() {
          // SWR call for all permissions
        const { GetBlogs } = useFetch();
        const { data: blogs } = GetBlogs();
        const [readMore, setReadMore] = useState(false);
    // Function to format ISO timestamp to human-readable time
    const formatTimestamp = (isoTimestamp) => {
      const date = new Date(isoTimestamp);
      return date.toLocaleString(); // Use this for a default format, you can customize it further
    };
        const sanitizeHTML = (html) => {
          return { __html: DOMPurify.sanitize(html) };
        };

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
              <Grid item key={blogs._id} xs={12} sm={6} md={4}>
                <Card>
				  <div className="news-one__left">
              <div className="news-one__img">
				<CardMedia
                    component="img"
                     image={blogs.post_featured_image}
					 height="250px"
                  />
                <Link href={`/news-details?id=${blogs._id}`}>
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
                  <li>{formatTimestamp(blogs.post_created_at)}
                  </li>
                </ul>
                <h3 className="news-one__title">
                    {blogs.post_title}
                </h3>
              </div>
            </div>
                </Card>
                
            <p className="causes-one__text" dangerouslySetInnerHTML={sanitizeHTML(readMore ? blogs.post_description : `${blogs.post_description.substring(0, 300)} ....`)} />

            <a href={`/news-details?id=${blogs._id}`} className="footer-widget__about-btn">
                  Read More
                </a>
              </Grid>
            ))}
          </Grid>
        </Container>
  );
}