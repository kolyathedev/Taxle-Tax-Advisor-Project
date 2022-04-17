import React from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';


const ProjectsItem = ({
  title,
  info,
  info2,
  info3,
  info4,
  info5,
  url,
  butText,
  img,
  isDesktop,
  isMobile,
}) => {
  return (
    <Container>
      <Row>
        {img === 'Documents' ? (
          <Col lg={6} sm={12}>
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="thumbnail rounded">
                {img === 'Documents' && isDesktop ?  <StaticImage
                  placeholder="blurred"
                  src="../../images/documents.svg"
                  alt="documents"
                  objectFit="contain"
                  style={{float:"left"}}
                /> : null}
              </div>
            </Fade>
          </Col>
        ) : img === 'Teacup' ? null : (
          <Col lg={3}></Col>
        )}
        <Col lg={6} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="project-wrapper__text">
              <h3 className="project-wrapper__text-title">{title}</h3>
              <div>
                <p>{info}</p>
                <p className="mb-4">{info2 || null}</p>
                <p className="mb-4">{info3 || null}</p>
                <p className="mb-4">{info4 || null}</p>
                <p className="mb-4">{info5 || null}</p>
              </div>
              {butText ? (
                <Link to="/questionnaire" className="cta-btn cta-btn--hero">
                  {' '}
                  {butText}{' '}
                </Link>
              ) : null}
            </div>
          </Fade>
        </Col>
        {img ? null : <Col lg={3}></Col>}

        {img ? (
          <Col lg={6} sm={12}>
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="thumbnail rounded">
                {img === 'Teacup' && isDesktop ? <StaticImage
                  placeholder="blurred"
                  src="../../images/teacup.svg"
                  alt="teacup"
                  objectFit="contain"
                /> : null}
              </div>
            </Fade>
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default ProjectsItem;
