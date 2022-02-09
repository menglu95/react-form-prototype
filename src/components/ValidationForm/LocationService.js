import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { locationUpdate, servicesUpdate } from '../../features/locationServiceSlice';

const LocationService = () => {
  const country = useSelector(state => state.locationService.location);
  const services = useSelector(state => state.locationService.services);
  const dispatch = useDispatch();

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
  ];

  const countryHandler = (e) => {
    dispatch(locationUpdate(e.target.value));
  };

  const serviceHandler = (e) => {
    dispatch(servicesUpdate(e.target.name));
  };

  const checkedHandler = (checkItem) => {
    return services.includes(checkItem);
  };

  return (
    <>
      <Form.Text>country</Form.Text>
      <Form.Select
        className="mb-3"
        onChange={countryHandler}
        value={country}
      >
        {countries.map((country, idx) => <option key={idx} >{country}</option>)}
      </Form.Select>
      <Form.Text>Services Required</Form.Text>
      <div className="ps-3 mb-5">
        {
          checkList.map((item, idx) =>
            <Form.Check
              type="checkbox"
              key={idx}
              label={item}
              name={item}
              onChange={serviceHandler}
              checked={checkedHandler(item)} />)
        }
      </div>
      <Button variant="primary" className="px-5 me-5">Next &gt;&gt;</Button>
      <Button variant="light">Cancel</Button>
    </>
  )
}

export default LocationService;