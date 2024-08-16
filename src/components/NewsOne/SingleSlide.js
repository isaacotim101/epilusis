import React from "react";
import { Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Youtube } from 'react-feather';
//import { YouTube } from "@material-ui/icons";
const SingleSlide = ({ video }) => {
  const { snippet } = video;
  const { thumbnails, title } = snippet;

  return (
    <SwiperSlide>
      <div className="news-one__left">
        <div className="news-one__img">
          <Image src={thumbnails.medium.url} alt={title} />
          <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                        <a>
                        <Youtube color="#FF0000" size={80} />
            </a>
          </Link>
        </div>
        <div className="news-one__bottom">
          <h3 className="news-one__title">
          <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                          <a>{title}</a>
            </Link>
          </h3>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SingleSlide;
