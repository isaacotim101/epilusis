import React from "react";
import { Image } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";



const CausesDetailsRight = () => {

  const { GetSuccess } = useFetch();
  const { data: success } = GetSuccess();
  return (
    <div className="causes-details__right">
      <div className="causes-details__donations">
        <h3 className="causes-details__donations-title">Our Recent Success Stories</h3>
        <ul className="list-unstyled causes-details__donations-list">
        {success?.map((success) => (
            <li key={success._id}>
              <div className="causes-details__donations-img">
                <Image
                  src={success.image}
                  alt=""
                  width="60px"
                  height="60px"
                />
              </div>
              <div className="causes-details__donations-content">
                <h5>
                  {success.title}
                </h5>
                <a href={`/stories-details?id=${success._id}`}>
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
