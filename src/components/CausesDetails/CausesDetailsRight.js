import React from "react";
import { Image } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";



const CausesDetailsRight = () => {

  const { GetCauses } = useFetch();
  const { data: projects } = GetCauses();
  return (
    <div className="causes-details__right">
      <div className="causes-details__donations">
        <h3 className="causes-details__donations-title">Our Recent Projects</h3>
        <ul className="list-unstyled causes-details__donations-list">
        {projects?.map((projects) => (
            <li key={projects.cause_id}>
              <div className="causes-details__donations-img">
                <Image
                  src={projects.cause_image}
                  alt=""
                  width="60px"
                  height="60px"
                />
              </div>
              <div className="causes-details__donations-content">
                <h5>
                  {projects.cause_title}
                </h5>
                <h4>Goal ${projects.cause_goal}<span> | Raised ${projects.cause_raised}</span></h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CausesDetailsRight;
