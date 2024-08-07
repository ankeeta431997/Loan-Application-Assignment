import React from 'react';
import { Form } from 'react-bootstrap';

const LoanDurationCheckboxes = ({ loanDurationYears, onChange }) => (
  <Form.Group controlId="loanDuration" className="text-start">
    <Form.Label>Loan Duration:</Form.Label>
    <div className="text-start d-flex flex-column">
      {['5Yr', '10Yr', '15Yr', '20Yr'].map((year) => (
        <Form.Check
          key={year}
          type="checkbox"
          label={`${year.replace('Yr', '')} year${year === '1Yr' ? '' : 's'}`}
          checked={loanDurationYears.includes(year)}
          onChange={() => onChange(year)}
        />
      ))}
    </div>
  </Form.Group>
);

export default LoanDurationCheckboxes;
