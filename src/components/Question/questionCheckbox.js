import React from 'react';
import { Container, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Form from 'react-bootstrap/Form';

const questionCheckbox = ({ section, appear, notSureProp, onClick, onChange }) => {
  // Hide the not sure question?
  // const [notSureHide] = useState(notSureProp);
  // I've edited this out for now and just passed the prop directly to the ternary, as there is no point creating extra state for it I think?

  // different onChange functions to update state.
  // Need to think of way to evaluate this into one function.

  // type of check box
  const type = 'radio';

  if (section.key != 8 && section.key != 13 && section.key != 18) {
    return (
      <Container className={appear ? 'null' : 'hide'}>
        <Fade left duration={1000} delay={300} distance="30px" key={section.key}>
          <Form.Row>
            <Col />
            <Col md={6}>
              <p> {section.title}</p>

              <br />
              <Form.Check
                className="formCheckStyle"
                inline
                name={section.title}
                label="Yes"
                value="Yes"
                type={type}
                id={`inline-${type}-1`}
                onClick={onClick}
              />
              <Form.Check
                className="formCheckStyle"
                inline
                name={section.title}
                label="No"
                value="No"
                type={type}
                id={`inline-${type}-2`}
                onClick={onClick}
              />
              {section.key === 10 ? (
                <Form.Check
                  className="formCheckStyle"
                  inline
                  name={section.title}
                  label="Mixture"
                  value="Mixture"
                  type={type}
                  id={`inline-${type}-2`}
                  onClick={onClick}
                />
              ) : null}
              <Form.Check
                inline
                name={section.title}
                label="Not Sure"
                type={type}
                id={`inline-${type}-3`}
                className={notSureProp ? 'formCheckStyle' : 'hide'}
                onClick={onClick}
              />
            </Col>

            <Col />
          </Form.Row>
        </Fade>
      </Container>
    );
  } else if (section.key == 13 || section.key == 18) {
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
                placeholder={section.title}
                name="value"
                required
                onChange={onChange}
              />
            </Col>
          </Form.Row>
        </Fade>
      </Container>
    );
  } else {
    return (
      <Container className={appear ? 'null' : 'hide'}>
        <Fade left duration={1000} delay={300} distance="30px" key={section.key}>
          <Form.Row>
            <Col />
            <Col md={6}>
              <p> {section.title}</p>

              <br />
              <Form.Check
                className="formCheckStyle"
                inline
                name="1"
                label="1"
                value="1"
                type={type}
                id={`inline-${type}-1`}
                onClick={onClick}
              />
              <Form.Check
                className="formCheckStyle"
                inline
                name="2"
                label="2"
                value="2"
                type={type}
                id={`inline-${type}-2`}
                onClick={onClick}
              />
              <Form.Check
                className="formCheckStyle"
                inline
                name="3"
                label="3"
                value="3"
                type={type}
                id={`inline-${type}-3`}
                onClick={onClick}
              />
              <Form.Check
                className="formCheckStyle"
                inline
                name="4+"
                label="4+"
                value="4+"
                type={type}
                id={`inline-${type}-3`}
                onClick={onClick}
              />
            </Col>

            <Col />
          </Form.Row>
        </Fade>
      </Container>
    );
  }
};
questionCheckbox.propTypes = {
  section: PropTypes.object,
  appear: PropTypes.bool,
  notSureProp: PropTypes.bool,
  onClick: PropTypes.func,
};

export default questionCheckbox;
