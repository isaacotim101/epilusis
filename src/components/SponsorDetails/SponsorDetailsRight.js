import React from "react";
import { Image } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";



const CausesDetailsRight = () => {

  const { GetSponsor } = useFetch();
  const { data: projects } = GetSponsor();
  return (
    <div className="causes-details__right">
      <div className="causes-details__donations">
        <h3 className="causes-details__donations-title">Recent Educate a child Programs</h3>
        <ul className="list-unstyled causes-details__donations-list">
        {projects?.map((projects) => (
            <li key={projects.cause_id}>
              <div className="causes-details__donations-img">
                <a href={`/sponsor-details?id=${projects._id}`}>
                  <Image
                  src={projects.image}
                  alt=""
                  width="60px"
                  height="60px"
                />
                </a>
                
              </div>
              <div className="causes-details__donations-content">
                <a href={`/sponsor-details?id=${projects._id}`}>
                  <h5>
                  {projects.title}
                </h5>
              </a>
               </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="causes-details__donations">
            <iframe src="https://global-development-group-project.raisely.com/embed/j902n-african-hearts-uganda?projectNum=J902N&amp;projectName=African%20Hearts%20Uganda" width="100%" height="700"></iframe>
            </div>
    </div>
  );
};

export default CausesDetailsRight;
