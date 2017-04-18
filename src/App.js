import React, { Component } from 'react';
import './App.css';

import { Col, Grid, Row } from 'react-bootstrap';

import BufferForm from './BufferForm';
import MeasurementForm from './MeasurementForm';
import Measurements from './Measurements';
import MeasurementsTally from './MeasurementsTally';

class App extends Component {

  state = {
    buffer: 0,
    measurements: []
  }

  onBufferChange = (e) => {
    e.preventDefault();
    const buffer = e.target.value ? parseFloat(e.target.value, 10) : undefined;
    this.setState({
      buffer: buffer
    });
  }

  onAddMeasurement = (value) => {
    const measurement = value ? parseFloat(value, 10) : undefined;
    if (measurement) {
      this.setState({
        measurements: this.state.measurements.concat(measurement)
      });
    }
  }

  render() {
    const { buffer, measurements } = this.state;
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col sm={6} md={6}>
              <MeasurementForm onAddMeasurement={this.onAddMeasurement} />
            </Col>
            <Col sm={6} md={6}>
              <BufferForm buffer={buffer} onBufferChange={this.onBufferChange} />
            </Col>
          </Row>
          <Row>
            <Col><hr /></Col>
          </Row>
          <Row>
            <Col sm={6} md={6}>
              <Measurements measurements={measurements} />
            </Col>
            <Col sm={6} md={6}>
              <MeasurementsTally measurements={measurements} buffer={buffer} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
