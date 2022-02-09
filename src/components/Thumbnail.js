import React from 'react';
import { Card } from 'react-bootstrap';
import logo from '../assets/img/logo.jpg';
import '../scss/thumbnail.scss';

const Thumbnail = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Thumbnail label</Card.Title>
        <Card.Text className="thumbnail-content">
          test test
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Thumbnail;