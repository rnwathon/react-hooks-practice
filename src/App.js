import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
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

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProgressBar variant={progressVariant(state.progress)} now={state.progress} style={{width: "50vw"}}/>
        <br />
        <Container>
          <Row>
            <Col xs={6}>
              <Button variant="light" size="lg" block onClick={() => {state.progress !== 0 && dispatch("minus")}}> 
                <span>➖</span> 
              </Button>
            </Col>
            <Col xs={6}>
              <Button variant="light" size="lg" block onClick={() => {state.progress !== 100 && dispatch("plus")}}>
                <span>➕</span> 
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
