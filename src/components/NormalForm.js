import React from 'react';
import '../scss/normalForm.scss';
import { Form } from 'react-bootstrap';
import { CaretDownFill } from 'react-bootstrap-icons';

const NormalForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="LoremInput">
        <Form.Text className="text-muted">
          Lorem ipsum
        </Form.Text>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="subjectInput">
        <div className="message-label">
          <Form.Text className="text-muted">
            Subject
          </Form.Text>
          <Form.Text>
            Insert System Variable
            <CaretDownFill className="down-icon" />
          </Form.Text>
        </div>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="messageTextarea">
        <div className="message-label">
          <Form.Text className="text-muted">
            Message
          </Form.Text>
          <Form.Text>
            Insert System Variable
            <CaretDownFill className="down-icon" />
          </Form.Text>
        </div>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>
    </Form>
  )
}

export default NormalForm;