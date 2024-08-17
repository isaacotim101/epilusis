import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import { Youtube } from 'react-feather';

const SingleNews = ({ video }) => {
  const { snippet } = video || {};
  const { thumbnails, title } = snippet || {};
  const imageUrl = thumbnails?.medium?.url;

  return (
    <div className="news-one__right-single">
      <div className="news-one__right-img">
        {imageUrl && <Image src={imageUrl} alt={title} />}
        <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
          <a>
            <Youtube color="red" size={48} />
          </a>
        </Link>
      </div>
      <div className="news-one__right-content">
        <p>
          <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
            <a>{title}</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SingleNews;
