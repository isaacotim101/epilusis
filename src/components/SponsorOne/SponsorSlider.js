import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { useFetch } from "../../hooks/useSWR";
import Link from "next/link";
import { Container, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import DOMPurify from 'dompurify'; // Import DOMPurify

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Album() {
  const [countStart, setCountStart] = useState(false);

  const [readMore, setReadMore] = useState(false);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Function to fetch YouTube videos
    const fetchYouTubeVideos = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCk080HPi00JgHJZUPE589Wg&type=video&maxResults=50&key=AIzaSyA3DyZmhoLZr0eTg2XZSQgOUrd_T2p0yPM"
        ); // Replace YOUR_API_KEY with your actual API key
        setVideos(response.data.items); // Set the retrieved videos in state
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchYouTubeVideos(); // Call the function to fetch videos when component mounts
  }, []);
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
            {videos?.map((projects) => (
              <Grid item key={projects.id.videoId} xs={12} sm={6} md={4}>
                <Card>
                <div className="causes-one__img">
                  <div className="causes-one__img-box">
                <Image
                  src={projects.snippet.thumbnails.medium.url}
                  alt=""
                  height='250px'
                />
              </div>
            </div>
            <div className="causes-one__content">
              <h3 className="causes-one__title">
                <Link href={`/sponsor-details?id=${projects.id.videoId}`}>{projects.snippet.title}</Link>
              </h3>
              </div>
            <a href={`/sponsor-details?id=${projects.id.videoId}`} className="footer-widget__about-btn">
                  <i className="fa fa-heart"></i>Watch
                </a>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
          </div>
        </Container>
  );
}
