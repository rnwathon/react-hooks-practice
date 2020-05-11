import React, { useState, useEffect }  from 'react';
import { Alert, Button, Badge, Row, Col, Container } from 'react-bootstrap';

export default function UseEffect() {
  const [onMountText, setOnMountText] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [effectLogs, setEffectLogs] = useState([]);

  useEffect(() => {
    setOnMountText("This useEffect is invoked on mount")
    console.log("This text is logged on mount by useEffect")
  }, [])

  useEffect(() => {
    setEffectLogs(prevState => [...prevState, "useEffect Invoked"])
  }, [randomNumber])

  return (
    <div>
      <h2 className="display-2">useEffect</h2>
      <br />
      <Container>
        <Row className="mb-5">
          <Col xs={{span: 4, offset: 4}}>
            <Alert variant="info">
              {onMountText}
            </Alert>
            <br />
            <Button variant="primary" onClick={() => setRandomNumber(Math.floor(Math.random()*(100-1+1)+1))}>
              Random Number <Badge variant="light">{randomNumber}</Badge>
              <span className="sr-only">random number</span>
            </Button>
            {effectLogs.map((log, idx) => {
              return(
                <div key={`useEffectLog-${idx}`}>
                  {`${"😎".repeat(idx)} ${log}`}
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
