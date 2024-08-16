import React from "react";
import { Col, Image } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";

const CharityImage = () => {
  
        // SWR call for all permissions
        const { GetHomepage } = useFetch();
        const { data: homepage } = GetHomepage();
  return (
    <Col xl={6} lg={6}>
     {homepage?.map((homepage) => (
      <div className="welcome-one__left" key={homepage.homepage_id}>
        <div className="welcome-one__img-box">
          <Image src={homepage.homepage_image} alt="" />
        </div>
      </div>
     ))}
    </Col>
  );
};

export default CharityImage;
