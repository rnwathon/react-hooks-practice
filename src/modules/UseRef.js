import React, { useState, useRef }  from 'react';
import { Alert, Form, Row, Col, Container } from 'react-bootstrap';

export default function UseRef() {
  const [otp, setOtp] = useState(["","","","","",""]);
  const otpRef0 = useRef(null);
  const otpRef1 = useRef(null);
  const otpRef2 = useRef(null);
  const otpRef3 = useRef(null);
  const otpRef4 = useRef(null);
  const otpRef5 = useRef(null);

  function handleOtpOnChange(event, index){
    let currentOtp = [...otp]
    currentOtp[index] = event.target.value
    setOtp(currentOtp)

    if(!event.target.value){
      switch(index){
        case 1:
          otpRef0.current.focus()
          break;
        case 2:
          otpRef1.current.focus()
          break;
        case 3:
          otpRef2.current.focus()
          break;
        case 4:
          otpRef3.current.focus()
          break;
        case 5:
          otpRef4.current.focus()
          break;
        default:
          break;
      }
    }else{
      switch(index){
        case 0:
          otpRef1.current.focus()
          break;
        case 1:
          otpRef2.current.focus()
          break;
        case 2:
          otpRef3.current.focus()
          break;
        case 3:
          otpRef4.current.focus()
          break;
        case 4:
          otpRef5.current.focus()
          break;
        default:
          break;
      }
    }
  }

  return (
    <div>
      <h2 className="display-2">useRef</h2>
      <br />
      <Container>
        <Alert variant="info">
          Insert OTP
        </Alert>
        <Row className="mb-5">
          <Col xs={{span: 1, offset: 3}}>
            <Form>
              <Form.Group>
                <Form.Control 
                  type="text" 
                  size="lg"
                  ref={otpRef0}
                  value={otp[0]}
                  className="text-center font-weight-bold"
                  onChange={e => handleOtpOnChange(e, 0)}/>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={{span: 1}}>
            <Form>
              <Form.Group>
                <Form.Control 
                  type="text" 
                  size="lg"
                  ref={otpRef1}
                  value={otp[1]}
                  className="text-center font-weight-bold"
                  onChange={e => handleOtpOnChange(e, 1)}/>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={{span: 1}}>
            <Form>
              <Form.Group>
                <Form.Control 
                  type="text" 
                  size="lg"
                  ref={otpRef2}
                  value={otp[2]}
                  className="text-center font-weight-bold"
                  onChange={e => handleOtpOnChange(e, 2)}/>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={{span: 1}}>
            <Form>
              <Form.Group>
                <Form.Control 
                  type="text" 
                  size="lg"
                  ref={otpRef3}
                  value={otp[3]}
                  className="text-center font-weight-bold"
                  onChange={e => handleOtpOnChange(e, 3)}/>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={{span: 1}}>
            <Form>
              <Form.Group>
                <Form.Control 
                  type="text" 
                  size="lg"
                  ref={otpRef4}
                  value={otp[4]}
                  className="text-center font-weight-bold"
                  onChange={e => handleOtpOnChange(e, 4)}/>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={{span: 1}}>
            <Form>
              <Form.Group>
                <Form.Control 
                  type="text" 
                  size="lg"
                  ref={otpRef5}
                  value={otp[5]}
                  className="text-center font-weight-bold"
                  onChange={e => handleOtpOnChange(e, 5)}/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
