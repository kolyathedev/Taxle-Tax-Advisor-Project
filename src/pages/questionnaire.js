import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

import Questions from '../components/Question/Questions';

export default () => {
  const { lang } = headData;

  const [hideQuestions, setHideQuestions] = useState(true);

  const showForm = () => {
    setHideQuestions({
      ...state,
      show: true,
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Questionaire</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Questionaire Page" />
      </Helmet>
      <section id="question" className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center">
              Questionnaire
              <span role="img" aria-label="emoji">
                🖋️
              </span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h3 className={hideQuestions ? 'hero-title text-center' : 'hide'}>
              Fill in this questionnaire to give us the information we need to give you an initial
              quote. And it all goes from there...
            </h3>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <button
                onClick={() => setHideQuestions(!hideQuestions)}
                className={hideQuestions ? 'cta-btn cta-btn--hero' : 'hide'}
                to="#!"
              >
                Start
              </button>
            </p>
          </Fade>
          <Row className={hideQuestions ? 'hide' : null}>
            <Col>
              <Fade bottom duration={1000} distance="30px">
                <Questions />
              </Fade>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center', position: 'absolute', bottom: '0px' }}>
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                <span className="material-icons arrows">double_arrow</span>
                Go Back
              </Link>
            </p>
          </Row>
        </Container>
      </section>
    </>
  );
};
