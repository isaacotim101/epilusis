import footerData from "@/data/footerData";
import footerImage from "@/images/resources/epi_logo_white.svg";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";

const {
  exploreList,
  social,
  email,
  tel,
  officeAddress,
  about,
  link,
  copyrightYear,
  bottomLogo,
  footerBg,
} = footerData;

const SiteFooter = () => {
  
  return (
    <footer className="site-footer">
      <Container>    
        <div className="site-footer__bottom">
          <Row>
            <Col xl={12}>
              <div className="site-footer__bottom-inner">
                <div className="site-footer__bottom-logo-social">
                  <div className="site-footer__bottom-social">
                    {social.map(({ id, icon, href }) => (
                      <a href={href} key={id}>
                        <i className={`fab ${icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="site-footer__bottom-copy-right">
                  <p>
                    © Copyright {copyrightYear} |  Epilusis Ministries International
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
