import React from 'react';
import { Form } from 'react-bootstrap';

const CoApplicantRadios = ({ coApplicant, onChange }) => (
  <Form.Group controlId="coApplicant" className="text-start">
    <Form.Label>Co-Applicant:</Form.Label>
    <div className="co-applicant-options d-flex flex-column">
      {['Father', 'Mother', 'Spouse', 'Sibling', 'Other'].map((type, index) => (
        <Form.Check
          key={type}
          inline
          type="radio"
          label={<span style={{ backgroundColor: ['green', '#00FFFF', 'orange', 'blue', '#A9A9A9'][index], width: '100px', 
            display: 'inline-block', color: 'white' }}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>}
          value={type}
          checked={coApplicant === type}
          onChange={onChange}
        />
      ))}
    </div>
  </Form.Group>
);

export default CoApplicantRadios;
