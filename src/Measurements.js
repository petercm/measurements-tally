import React from 'react';
import './Measurements.css';

const measurementList = (measurements) => (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Measurements</th>
      </tr>
    </thead>
    <tbody>
      { measurements.map((m, i) => (
        <tr key={`m-${i}`}><td>{m}</td></tr>
      ))}
    </tbody>
  </table>
);

const Measurements = ({measurements = []}) => (
  <div className="Measurements">
    { measurements.length > 0 ? measurementList(measurements) : <span>Add some measurements...</span> }
  </div>
);

export default Measurements;

