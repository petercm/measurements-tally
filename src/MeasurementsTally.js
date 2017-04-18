import React from 'react';

const tally = (measurements, buffer) => {
  const tallied = measurements.reduce((accum, value) => {
    accum[value+buffer] = (accum[value+buffer] || 0) + 1;
    return accum;
  }, {});
  return (
    <table className="MeasurementsTally table table-bordered">
      <thead>
        <tr>
          <th>Measurement + Buffer</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        { Object.keys(tallied).sort().map((m) => (
          <tr key={`t-${m}`}>
            <td>{m}</td>
            <td>{tallied[m]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const MeasurementsTally = ({measurements = [], buffer=0}) => measurements.length > 0 ? tally(measurements, buffer) : null;

export default MeasurementsTally;

