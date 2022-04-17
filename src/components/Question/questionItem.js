import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

const questionItem = ({ section, appear, onChange }) => {
  // the Map function is iterating over the text questions and returning all of them. However the ones not appearing are not so because appear = false.
  // I've passed each object of the textQstate into questionItem, and set it as the section state.
  // from here I can call each value of the object into the question.

  // ! just need to configure the question item to deliver correct input fields and set up onChange event handler

  const [sectionState] = useState(section);

  return (
    <Container className={appear ? 'null' : 'hide'}>
      <Row>
        <h3>{sectionState.question}</h3>
      </Row>
      <Form.Row>
        <Col>
          <Form.Label srOnly>First Name </Form.Label>
          <Form.Control
            className="mb-3"
            size="lg"
            placeholder="First name"
            name="firstName"
            required
            onChange={onChange}
          />
        </Col>
        <Col>
          <Form.Label srOnly>Last Name</Form.Label>
          <Form.Control
            className="mb-3"
            size="lg"
            placeholder="Last name"
            name="lastName"
            required
            onChange={onChange}
          />
        </Col>
      </Form.Row>

      <Form.Row>
        <Col />
        <Col md={6}>
          <Form.Label srOnly>Email</Form.Label>

          <Form.Control
            className="mb-3"
            size="lg"
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={onChange}
          />
        </Col>
        <Col />
      </Form.Row>
    </Container>
  );
};

questionItem.propTypes = {
  section: PropTypes.object,
  appear: PropTypes.bool,
};

export default questionItem;
