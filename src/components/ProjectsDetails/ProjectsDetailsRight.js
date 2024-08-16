import React from "react";
import { Image } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";



const CausesDetailsRight = () => {

  const { GetProjects } = useFetch();
  const { data: projects } = GetProjects();
  return (
    <div className="causes-details__right">
      <div className="causes-details__donations">
        <h3 className="causes-details__donations-title">Our Latest Impacts</h3>
        <ul className="list-unstyled causes-details__donations-list">
        {projects?.map((projects) => (
            <li key={projects._id}>
              <div className="causes-details__donations-img">
                <Image
                  src={projects.image}
                  alt=""
                  width="60px"
                  height="60px"
                />
              </div>
              <div className="causes-details__donations-content">
                <h5>
                  {projects.title}
                </h5>
                <a href={`/projects-details?id=${projects._id}`}>
                <h4>Read More</h4>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CausesDetailsRight;
