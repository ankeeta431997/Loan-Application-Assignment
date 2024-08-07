import React from 'react';
import { Form } from 'react-bootstrap';

const DepartmentCheckboxes = ({ departments, handleCheckboxChange }) => (
  <Form.Group controlId="loanDuration" className="text-start">
    <Form.Label className="text-start">Send to Group </Form.Label>
    <div className="text-start">
      {Object.keys(departments).map((department, idx) => (
        <Form.Check
          key={idx}
          type="checkbox"
          label={department}
          checked={departments[department]}
          onChange={() => handleCheckboxChange(department)}
        />
      ))}
    </div>
  </Form.Group>
);

export default DepartmentCheckboxes;
