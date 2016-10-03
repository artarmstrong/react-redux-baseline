import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={3} md={2} lg={5} />
          <Col sm={6} md={8} lg={2}>
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
              </div>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </div>
          </Col>
          <Col sm={3} md={2} lg={5} />
        </Row>
      </Grid>
    );
  }
}

export default App;
