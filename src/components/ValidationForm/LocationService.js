import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LocationService = () => {
  const countries = [
    'India',
    'UK',
    'Israel',
    'USA',
    'Norway'
  ];
  const checkList = [
    'IoT Hub with UI',
    'Full Search Cluster',
    'Managed Kubernetes Cluster',
    'IoT Rest API',
    'Search API'
  ]
  return (
    <>
      <Form.Text className="country-select-label">country</Form.Text>
      <Form.Select className="mb-3">
        {countries.map((country, idx) => <option key={idx}>{country}</option>)}
      </Form.Select>
      <Form.Text>Services Required</Form.Text>
      <div className="ps-3 mb-5">
        {checkList.map(item => <Form.Check type="checkbox" key={item} label={item} />)}
      </div>
      <Button variant="primary" className="px-5 me-5">Next &gt;&gt;</Button>
      <Button variant="light">Cancel</Button>
    </>
  )
}

export default LocationService;