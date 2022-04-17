import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          {/* <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link> */}
        </span>
        <hr />
        <Row className="justify-content-center">
          <Col sm="auto">
            {' '}
            <Link to="/privacy">
              <p className="footer__text">Privacy Policy</p>
            </Link>
          </Col>
          <Col sm="auto">
            <Link to="/">
              <p className="footer__text">Careers</p>
            </Link>
          </Col>
          <Col sm="auto">
            <Link to="/">
              <p className="footer__text">Terms and Conditions</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
