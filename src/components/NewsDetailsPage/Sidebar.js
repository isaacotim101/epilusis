import { newsDetailsPage } from "@/data/newsDetails";
import React from "react";
import { Image } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";

const { postList, tags, categories } = newsDetailsPage;

const Sidebar = () => {
  
  const { GetBlogs } = useFetch();
  const { data: blog } = GetBlogs();

  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Recent Posts</h3>
        <ul className="sidebar__post-list list-unstyled">
        {blog?.map((blogs) => (
            <li key={blogs.blog_id}>
              <div className="sidebar__post-image">
                <Image
                  src={blogs.post_featured_image}
                  alt=""
                  width="60px"
                  height="60px"
                />
              </div>
              <div className="sidebar__post-content">
                <h3>
                  <a href={`/news-details?id=${blogs._id}`} className="sidebar__post-content_meta">
                    <i className="far fa-user-circle"></i> {blogs.post_auther}
                  </a>
                  <a href={`/news-details?id=${blogs._id}`}>{blogs.post_title}</a>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
