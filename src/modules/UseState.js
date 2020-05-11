import React, { useState }  from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';

export default function UseState() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2 className="display-2">useState</h2>
      <br />
      <Container>
        <Row className="mb-5">
          <Col xs={{span: 4, offset: 4}}>
            <Form>
              <Form.Group>
                <Form.Label>{text ? text : "Label"}</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Type text here to change the label" 
                  onChange={e => setText(e.target.value)}/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
