import React from "react";
import { Image } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";



const CausesDetailsRight = () => {

  const { GetProgram } = useFetch();
  const { data: program } = GetProgram();
  return (
    <div className="causes-details__right">
      <div className="causes-details__donations">
        <h3 className="causes-details__donations-title">Our Program</h3>
        <ul className="list-unstyled causes-details__donations-list">
        {program?.map((program) => (
            <li key={program._id}>
              <div className="causes-details__donations-img">
                <Image
                  src={program.image}
                  alt=""
                  width="60px"
                  height="60px"
                />
              </div>
              <div className="causes-details__donations-content">
                <h5>
                  {program.title}
                </h5>
                <a href={`/program-details?id=${program._id}`}>
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
