import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Col, Container, Row } from "react-bootstrap";
import youtubeData from "@/data/sermons.json";
import { Youtube } from 'react-feather';

export default function Album() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Set initial state with imported data after component mounts
        const sortedVideos = youtubeData.items.sort((a, b) => {
            return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
        });
        setVideos(sortedVideos);
    }, []); 

    return (
        <Container sx={{ py: 12 }} maxWidth="md">
            <Row>
                <Col xl={8} lg={8}>
                    <div className="section-title text-left">
                        <h2 className="section-title__title">
                        Latest Sermons
                        </h2>
                    </div>
                </Col>
            </Row>
            <Grid container spacing={1}>
                {videos.map((video) => (
                    <Grid item key={video.id.videoId} xs={12} sm={6} md={4}>
                        <Card>
                            <div className="news-one__left">
                                <div className="news-one__img">
                                    <CardMedia
                                        component="img"
                                        image={video.snippet.thumbnails.medium.url}
                                        
                                    />
                                    <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                                    <Youtube color="#FF0000" size={80} />
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
