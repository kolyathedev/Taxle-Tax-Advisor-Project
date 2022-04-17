import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Questionaire Page" />
      </Helmet>
      <section id="privacy" className="jumbotron">
        <Container>
          <Fade top duration={1000} delay={0} distance="30px">
            <h1 className=" text-center">
              Privacy Policy
              <span role="img" aria-label="emoji">
                📜
              </span>
            </h1>
          </Fade>

          <Row className="privText">
            <Col></Col>
            <Col md={8}>
              <h3>Our Contact Details</h3>
              <p>E-mail: samantha@taxle.tax</p>
              <h3>The type of personal information we collect</h3>
              <p>We currently collect and process the following information: </p>
              <ul>
                <li>
                  Personal identifiers, contacts and characteristics (for example, name and contact
                  details)
                </li>
                <li>Income sources</li>
              </ul>
              <h3>How we get the personal information and why we have it </h3>
              <p>
                The personal information we process is provided to us directly by you when you
                complete our contact form or questionnaire. This information is collected so that we
                can respond to your query or provide you with a quote for our services.
              </p>
              <p>Under the General Data Protection Regulation (GDPR), the lawful bases we rely on for processing this information is your consent. You are able to remove your consent at any time. You can do this by contacting samantha@taxle.tax. By completing our contact form or questionnaire, you are giving your consent to process your data per the previous paragraph.</p>
              <h3>How we store your personal information  </h3>
              <p>Your information is securely stored on an external storage facility. </p>
              <p>If you do not wish to engage us as your adviser following receipt of our quote, all personal data collected will be deleted.</p>
              <h3>Your data protection rights </h3>
              <p>Under data protection law, you have rights including:</p>
              <p><strong>Your right of access </strong> - You have the right to ask us for copies of your personal information. </p>
              <p><strong>Your right to rectification </strong> - You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</p>
              <p><strong>Your right to erasure</strong> - You have the right to ask us to erase your personal information in certain circumstances. </p>
              <p id="datePrivacy">Date:05/03/2021</p>
            </Col>
            <Col></Col>
          </Row>
          <Fade left duration={1000} delay={0} distance="30px">
            <p className="hero-cta">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
