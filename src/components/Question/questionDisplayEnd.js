import React from 'react';
import { Container, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Form from 'react-bootstrap/Form';

const questionDisplayEnd = ({ section, appear }) => {
  return (
    <Container className={appear ? 'null' : 'hide'}>
      <Fade left duration={1000} delay={300} distance="30px" key={section.key}>
        <Form.Row>
          <Col />
          <Col md={6}>
            <p> {section.title}</p>
            <br />
          </Col>
          <Col />
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control
              className="mb-3"
              size="lg"
              type="text"
              placeholder={section.value || null}
              name={section.value || null}
              value={section.value || null}
              required
            />
          </Col>
        </Form.Row>
      </Fade>
    </Container>
  );
};

questionDisplayEnd.propTypes = {
  section: PropTypes.object,
  appear: PropTypes.bool,
};

export default questionDisplayEnd;
