import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';

import UseState from './modules/UseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container>
        <UseState />
      </Container>
    </div>
  );
}

export default App;
