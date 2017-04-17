import React from 'react';
import './BufferForm.css';

import { ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

const BufferForm = ({ buffer, onBufferChange }) => (
  <Form inline className="BufferForm" onSubmit={onBufferChange}>
    <FormGroup>
      <ControlLabel>Buffer</ControlLabel>
      &nbsp;
      <FormControl type="number" value={buffer} onChange={onBufferChange} />
    </FormGroup>
  </Form>
);

export default BufferForm;

