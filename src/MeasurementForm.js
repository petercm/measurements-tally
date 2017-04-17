import React from 'react';
import './MeasurementForm.css';

import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';

const onSubmit = (handler) => (event) => {
  event.preventDefault();
  const input = event.target['measurement'];
  handler(input.value);
  input.value = '';
  input.focus();
};

const MeasurementForm = ({ onAddMeasurement }) => (
  <Form inline className="MeasurementForm" onSubmit={onSubmit(onAddMeasurement)}>
    <FormGroup>
      <FormControl name="measurement" type="number" placeholder="measurement" />
    </FormGroup>
    &nbsp;
    <Button type="submit" bsStyle="primary">Add</Button>
  </Form>
);

export default MeasurementForm;

