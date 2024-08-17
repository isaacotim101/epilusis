import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleNews = ({ news = {} }) => {
    // Function to format ISO timestamp to human-readable time
    const formatTimestamp = (isoTimestamp) => {
      const date = new Date(isoTimestamp);
      return date.toLocaleString(); // Use this for a default format, you can customize it further
    };
  const { title, image, href, comments, date } = news;

  return (
    <div className="news-one__right-single">
      <div className="news-one__right-img">
        <Image src={image.src} alt="" />
        <Link href={href}>
          <a>
            <i className="fa fa-plus"></i>
          </a>
        </Link>
      </div>
      <div className="news-one__right-content">
        <ul className="list-unstyled news-one__right-meta">
          <li>{formatTimestamp(date)}</li>
          <li>
            <span>/</span>
          </li>
          <li>
            <a href="#">{comments} Comments</a>
          </li>
        </ul>
        <h3 className="news-one__right-title">
          <Link href={href}>
            <a>{title}</a>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SingleNews;
