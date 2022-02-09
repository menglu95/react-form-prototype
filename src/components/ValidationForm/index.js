import React from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import '../../scss/validationForm.scss';
import LocationService from './LocationService';

const ValidationForm = () => {
  return (
    <Container className="border p-3">
      <Row>
        <Col md={4}>
          <div className="progress-btn-groups">
            <button>1. Location & Services</button>
            <button>2. Cluster Size</button>
            <button>3. Admin User Detail</button>
            <button>4. Review Details</button>
            <button>Activation Progress</button>
          </div>
        </Col>
        <Col md={8}>
          <Form>
            <LocationService />
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ValidationForm;