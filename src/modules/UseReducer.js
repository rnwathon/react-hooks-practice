import React, { useReducer }  from 'react';
import { ProgressBar, Button, Row, Col, Container } from 'react-bootstrap';

function progressVariant(progress){
  switch(true){
    case (progress < 40):
      return "danger";
    case (progress >= 40 && progress <= 70):
      return "warning";
    case (progress > 70):
      return "success";
    default:
      return "secondary"
  }
}

const initalState = {
  progress: 10
}

function reducer(state, action){
  switch(action){
    case "plus":
      return { progress: state.progress + 10 }
    case "minus":
      return { progress: state.progress - 10 }
    default:
      throw new Error("No actions!")
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      <h2 className="display-2">useReducer</h2>
      <br />
      <Container>
        <ProgressBar variant={progressVariant(state.progress)} now={state.progress} className="w-100 mb-5"/>
        <Row className="mb-5">
          <Col xs={{span: 3, offset: 3}}>
            <Button variant="info" size="lg" block onClick={() => {state.progress !== 0 && dispatch("minus")}}> 
              <span>➖</span> 
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="info" size="lg" block onClick={() => {state.progress !== 100 && dispatch("plus")}}>
              <span>➕</span> 
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
