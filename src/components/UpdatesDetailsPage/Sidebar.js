import { newsDetailsPage } from "@/data/newsDetails";
import React from "react";
import { Image } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";

const { postList, tags, categories } = newsDetailsPage;

const Sidebar = () => {
  
  const { GetUpdates } = useFetch();
  const { data: update } = GetUpdates();

  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Recent Posts</h3>
        <ul className="sidebar__post-list list-unstyled">
        {update?.map((updates) => (
            <li key={updates.update_id}>
              <div className="sidebar__post-image">
                <Image
                  src={updates.update_featured_image}
                  alt=""
                  width="60px"
                  height="60px"
                />
              </div>
              <div className="sidebar__post-content">
                <h3>
                  <a href={`/updates-details?id=${updates._id}`} className="sidebar__post-content_meta">
                    <i className="far fa-user-circle"></i> {updates.update_auther}
                  </a>
                  <a href={`/updates-details?id=${updates._id}`}>{updates.update_title}</a>
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
